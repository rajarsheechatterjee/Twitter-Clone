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

// @route GET api/profile/me
// @desc Get curent users profile
// @access private

router.get('/me', auth, async (req, res) => {
    try {

        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user', ['name', 'avatar', 'username']);

        if (!profile) {
            return res.status(400).json({
                msg: 'There is no profile for this user'
            });
        }

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/profile/me
// @desc GCreate or update profile
// @access private

router.post('/', [auth, check('bio', 'Bio is required').not().isEmpty()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        bio,
        location
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;

    if (bio) profileFields.bio = bio;
    if (location) profileFields.location = location;

    try {

        let profile = await Profile.findOne({
            user: req.user.id
        });

        if (profile) {
            profile = await Profile.findOneAndUpdate({
                user: req.user.id
            }, {
                $set: profileFields
            }, {
                new: true
            });

            return res.json(profile);
        }

        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);

    } catch (err) {

        console.error(err.message);
        res.status(500).send('Server Error');

    }

});

// @route GET api/profiles
// @desc get all profile
// @access public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar', 'username']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/profile/user/:user_id
// @desc get profile by user_id
// @access public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id
        }).populate('user', ['name', 'avatar', 'username']);

        if (!profile) return res.status(400).json({
            msg: "Profile Not Found"
        });
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({
                msg: "Profile Not Found"
            });
        }
        res.status(500).send('Server Error');
    }
});

// @route DELETE api/profile
// @desc Delete all profile, user, tweets
// @access private

router.delete('/', auth, async (req, res) => {
    try {
        
        await Post.deleteMany({ user: req.user.id });

        await Profile.findOneAndRemove({
            user: req.user.id
        });

        await User.findOneAndRemove({
            _id: req.user.id
        });

        res.json({
            msg: 'User Deleted'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;