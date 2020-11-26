const { validationResult } = require("express-validator");

const Profile = require("../models/Profile");
const User = require("../models/User");
const Tweet = require("../models/Tweet");

const postTweet = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array(),
        });
    }

    try {
        const user = await User.findById(req.user.id).select("-password");

        const newTweet = new Tweet({
            text: req.body.text,
            name: user.name,
            username: user.username,
            avatar: user.avatar,
            user: req.user.id,
        });

        const tweet = await newTweet.save();

        res.json(tweet);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getTweets = async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id,
        });

        const tweets = await Tweet.find({
            $or: [
                { user: profile.following.map((following) => following.user) },
                { user: req.user.id },
            ],
        }).sort({
            date: -1,
        });

        res.json(tweets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const userTweets = async (req, res) => {
    try {
        const tweets = await Tweet.find({
            user: req.params.userId,
        }).sort({
            date: -1,
        });

        res.json(tweets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getTweet = async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id);

        if (!tweet) {
            return res.status(404).json({
                msg: "Tweet not found",
            });
        }

        res.json(tweet);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(404).json({
                msg: "Tweet not found",
            });
        }

        res.status(500).send("Server Error");
    }
};

const deleteTweet = async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id);

        if (!tweet) {
            return res.status(404).json({
                msg: "Tweet not found",
            });
        }

        if (tweet.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: "User not authorized",
            });
        }

        await tweet.remove();

        res.json({
            msg: "Tweet Deleted",
        });
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(404).json({
                msg: "Tweet not found",
            });
        }
        res.status(500).send("Server Error");
    }
};

const likeTweet = async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id);

        // Checks if the currentUser has already liked the tweet or not
        if (
            tweet.likes.filter((like) => like.user.toString() === req.user.id)
                .length > 0
        ) {
            // If yes then it unlikes by removing the user from the likes array
            const removeIndex = tweet.likes
                .map((like) => like.user.toString())
                .indexOf(req.user.id);

            tweet.likes.splice(removeIndex, 1);

            await tweet.save();

            res.json(tweet.likes);
        } else {
            // If no then it likes by pushing the user from the likes array
            tweet.likes.unshift({
                user: req.user.id,
            });

            await tweet.save();

            res.json(tweet.likes);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const postReply = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array(),
        });
    }

    try {
        const user = await User.findById(req.user.id).select("-password");
        const tweet = await Tweet.findById(req.params.id);

        const newReply = new Tweet({
            text: req.body.text,
            name: user.name,
            username: user.username,
            avatar: user.avatar,
            user: req.user.id,
        });

        tweet.replies.unshift(newReply);

        tweet.save();

        res.json(tweet.replies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const deleteReply = async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.tweetId);

        const reply = tweet.replies.find(
            (reply) => reply.id === req.params.replyId
        );

        if (!reply) {
            return res.status(404).json({
                msg: "Reply does not exist",
            });
        }

        if (reply.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: "User not authorized",
            });
        }

        const removeIndex = tweet.likes
            .map((reply) => reply.user.toString())
            .indexOf(req.user.id);

        tweet.replies.splice(removeIndex, 1);

        await tweet.save();

        res.json(tweet.replies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

module.exports = tweetsController = {
    postTweet,
    getTweets,
    userTweets,
    getTweet,
    deleteTweet,
    likeTweet,
    postReply,
    deleteReply,
};
