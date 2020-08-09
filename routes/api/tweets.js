const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
    check,
    validationResult
} = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Tweet = require('../../models/Tweet');
const {
    prependOnceListener
} = require('../../models/User');

/**
 * @route POST api/tweets
 * @desc Post a tweet
 * @access Private
 */

router.post(
    '/',
    [
        auth,
        [
            check('text', 'Text Is Required')
            .not()
            .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array()
            });
        }

        try {

            const user = await User.findById(req.user.id).select('-password');

            const newTweet = new Tweet({
                text: req.body.text,
                name: user.name,
                username: user.username,
                avatar: user.avatar,
                user: req.user.id
            });

            const tweet = await newTweet.save();

            res.json(tweet);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


/**
 * @route GET api/tweets
 * @desc Gets tweets of the accounts the current user follows
 * @access Private
 */

router.get('/', auth, async (req, res) => {
    try {

        const profile = await Profile.findOne({
            user: req.user.id
        });

        const tweets = await Tweet.find({
            user: profile.following.map(following => following.user)
        }).sort({
            date: -1
        });

        res.json(tweets);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route GET api/tweets/user/userId
 * @desc Gets tweets of a user
 * @access Private
 */

router.get('/user/:userId', auth, async (req, res) => {
    try {

        const tweets = await Tweet.find({
            user: req.params.userId
        }).sort({
            date: -1
        });

        res.json(tweets);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route GET api/tweets/:id
 * @desc Get a tweet by it's id
 * @access Private
 */

router.get('/:id', auth, async (req, res) => {
    try {

        const tweet = await Tweet.findById(req.params.id);

        if (!tweet) {
            return res.status(404).json({
                msg: 'Tweet not found'
            });
        }

        res.json(tweet);

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Tweet not found'
            });
        }

        res.status(500).send('Server Error');
    }
});

/**
 * @route DELETE api/tweets/:id
 * @desc Delete a tweet
 * @access Private
 */

router.delete('/:id', auth, async (req, res) => {
    try {

        const tweet = await Tweet.findById(req.params.id);

        if (!tweet) {
            return res.status(404).json({
                msg: 'Tweet not found'
            });
        }

        if (tweet.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'User not authorized'
            });
        }

        await tweet.remove();

        res.json({
            msg: 'Tweet Deleted'
        });

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Tweet not found'
            });
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route PUT api/like/:id
 * @desc Like a tweet
 * @access Private
 */

router.put('/like/:id', auth, async (req, res) => {
    try {

        const tweet = await Tweet.findById(req.params.id);

        // Checks if the currentUser has already liked the tweet or not
        if (tweet.likes.filter(like => like.user.toString() === req.user.id).length > 0) {

            // If yes then it unlikes by removing the user from the likes array
            const removeIndex = tweet.likes.map(like => like.user.toString()).indexOf(req.user.id);

            tweet.likes.splice(removeIndex, 1);

            await tweet.save();

            res.json(tweet.likes);

        } else {

            // If no then it likes by pushing the user from the likes array
            tweet.likes.unshift({
                user: req.user.id
            });

            await tweet.save();

            res.json(tweet.likes);
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route PUT api/unlike/:id
 * @desc Unlike a tweet
 * @access Private
 */

// router.put('/unlike/:id', auth, async (req, res) => {
//     try {

//         const tweet = await Tweet.findById(req.params.id);

//         if (tweet.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
//             return res.status(400).json({
//                 msg: 'Tweet has not yet been liked'
//             });
//         }

//         const removeIndex = tweet.likes.map(like => like.user.toString()).indexOf(req.user.id);

//         tweet.likes.splice(removeIndex, 1);

//         await tweet.save();

//         res.json(tweet.likes);

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

/**
 * @route POST api/tweet/reply
 * @desc Reply on a tweet
 * @access Private
 */

router.post(
    '/reply/:id',
    [
        auth,
        [
            check('text', 'Text Is Required')
            .not()
            .isEmpty()
        ]
    ],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array()
            });
        }

        try {

            const user = await User.findById(req.user.id).select('-password');
            const tweet = await Tweet.findById(req.params.id);

            const newReply = new Tweet({
                text: req.body.text,
                name: user.name,
                username: user.username,
                avatar: user.avatar,
                user: req.user.id
            });

            tweet.replies.unshift(newReply);

            tweet.save();

            res.json(tweet.replies);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

/**
 * @route DELETE api/tweets/reply/:id/:reply_id
 * @desc Delete a reply
 * @access Private
 */

router.delete('/reply/:id/:reply_id', auth, async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id);

        const reply = tweet.replies.find(reply => reply.id === req.params.reply_id);

        if (!reply) {
            return res.status(404).json({
                msg: 'Reply does not exist'
            });
        }

        if (reply.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'User not authorized'
            });
        }

        const removeIndex = tweet.likes
            .map(reply => reply.user.toString())
            .indexOf(req.user.id);

        tweet.replies.splice(removeIndex, 1);

        await tweet.save();

        res.json(tweet.replies);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;