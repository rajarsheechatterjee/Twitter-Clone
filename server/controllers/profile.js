const { validationResult } = require("express-validator");

const Profile = require("../models/Profile");
const User = require("../models/User");
const Tweet = require("../models/Tweet");

const getCurrentProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id,
        }).populate("user", ["name", "avatar", "username"]);

        if (!profile) {
            return res.status(400).json({
                msg: "There is no profile for this user",
            });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const createProfile = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    const { bio, location } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.following = [];

    if (bio) profileFields.bio = bio;
    if (location) profileFields.location = location;

    try {
        let profile = await Profile.findOne({
            user: req.user.id,
        });

        profileFields.following.unshift({
            user: req.user.id,
        });

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                {
                    user: req.user.id,
                },
                {
                    $set: profileFields,
                },
                {
                    new: true,
                }
            );

            return res.json(profile);
        }

        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find().populate("user", [
            "name",
            "avatar",
            "username",
        ]);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.userId,
        }).populate("user", ["name", "avatar", "username"]);

        if (!profile)
            return res.status(400).json({
                msg: "Profile Not Found",
            });
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(400).json({
                msg: "Profile Not Found",
            });
        }
        res.status(500).send("Server Error");
    }
};

const deleteProfile = async (req, res) => {
    try {
        await Tweet.deleteMany({
            user: req.user.id,
        });

        await Profile.findOneAndRemove({
            user: req.user.id,
        });

        await User.findOneAndRemove({
            _id: req.user.id,
        });

        res.json({
            msg: "User Deleted",
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const followProfile = async (req, res) => {
    try {
        // Profile of the current user
        const currentUser = await Profile.findOne({
            user: req.user.id,
        });

        // Profile of the user to be followed
        const followingUser = await Profile.findOne({
            user: req.params.userId,
        });

        // Checks if the current user already follows the profile
        if (
            currentUser.following.filter(
                (follow) => follow.user.toString() === req.params.userId
            ).length > 0
        ) {
            // If yes then unfollows the profile
            const removeIndex = currentUser.following
                .map((follow) => follow.user.toString())
                .indexOf(req.params.userId);

            currentUser.following.splice(removeIndex, 1);

            await currentUser.save();

            const removeIndex2 = followingUser.followers
                .map((follow) => follow.user.toString())
                .indexOf(req.params.userId);

            followingUser.followers.splice(removeIndex2, 1);

            await followingUser.save();

            res.json(followingUser.followers);
        } else {
            // If no then follows the profile
            currentUser.following.unshift({
                user: req.params.userId,
            });

            await currentUser.save();

            followingUser.followers.unshift({
                user: req.user.id,
            });

            await followingUser.save();

            res.json(followingUser.followers);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getSuggestions = async (req, res) => {
    try {
        const currentProfile = await Profile.findOne({
            user: req.user.id,
        });

        const profiles = await Profile.find({
            user: {
                $nin: currentProfile.following.map((follow) => follow.user),
            },
        }).populate("user", ["name", "avatar", "username"]);

        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

module.exports = profileController = {
    getCurrentProfile,
    createProfile,
    getProfiles,
    getProfile,
    deleteProfile,
    followProfile,
    getSuggestions,
};
