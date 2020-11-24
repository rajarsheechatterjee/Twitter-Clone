const express = require("express");
const router = express.Router();
const auth = require("../../server/middleware/auth");
const { check } = require("express-validator");

const profileController = require("../controllers/profile");

/**
 * @route   GET api/profile/me
 * @desc    Get curent user's profile
 * @access  Private
 */

router.get("/me", auth, profileController.getCurrentProfile);

/**
 * @route   POST api/profile/me
 * @desc    Create or update user profile
 * @access  Private
 */

router.post(
    "/",
    [auth, check("bio", "Bio is required").not().isEmpty()],
    profileController.createProfile
);

/**
 * @route   Get api/profile
 * @desc    Get all profiles
 * @access  Private
 */

router.get("/", auth, profileController.getProfiles);

/**
 * @route   GET api/profile/user/:userId
 * @desc    Get profile by userId
 * @access  Public
 */

router.get("/user/:userId", profileController.getProfile);

/**
 * @route   DELETE api/profile
 * @desc    Delete a user's tweets, profile and account
 * @access  Private
 */

router.delete("/", auth, profileController.deleteProfile);

/**
 * @route   PUT api/profile/follow/:userId
 * @desc    Follow a profile
 * @access  Private
 */

router.put("/follow/:userId", auth, profileController.followProfile);

/**
 * @route   Get api/profile/suggestions
 * @desc    Get follow suggestions
 * @access  Private
 */

router.get("/suggestions", auth, profileController.getSuggestions);

module.exports = router;
