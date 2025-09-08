const express = require('express');
const {body, param} = require('express-validator/check');
const router = express.Router();
const UserController = require('../controllers/user');
const db = require('../models');
const User = db.User;
const validationCheck = require('../middleware/checkValidation');
const checkAuth = require('../middleware/checkAuth');

router.post('/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .custom((value, {req}) => {
                if (!value.endsWith('.edu')) {
                    return Promise.reject('Has to be an edu E-mail!');
                }
                return User.findOne({where: {email: value}}).then(userData => {
                    if (userData) {
                        return Promise.reject('E-mail has been taken.');
                    }
                    return true;
                })
            }),
        body('password', 'Please enter a password with minimum length of 3')
            .trim()
            .isLength({min: 3})
    ],
    validationCheck,
    UserController.createUser
);

router.post('/guestSignup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .custom((value, {req}) => {
                return User.findOne({where: {email: value}}).then(userData => {
                    if (userData) {
                        return Promise.reject('E-mail has been taken.');
                    }
                    return true;
                })
            }),
        body('password', 'Please enter a password with minimum length of 3')
            .trim()
            .isLength({min: 3})
    ],
    validationCheck,
    UserController.createGuestUser
);

router.post('/login',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .normalizeEmail()
        ,
        body('password', 'Please enter a password with minimum length of 3')
            .trim()
            .isLength({min: 3})
    ],
    validationCheck,
    UserController.userLogin
);

router.put('/profile', checkAuth, UserController.updateProfile);

router.put('/profilePic', checkAuth, UserController.updateProfilePic);
router.get('/profile/:id', checkAuth, UserController.getUser);
router.get('/profile', checkAuth, UserController.getUser);

router.get('/verify/:email/:hash',
    [
        param('email', 'Please enter a valid email')
            .isEmail()
            .normalizeEmail(),
        param('hash', 'Invalid hash')
            .isLength({min: 190, max: 190})
    ],
    validationCheck, UserController.verifyEmail);

router.get('/sendVerifyAgain/:email', UserController.sendVerificationEmailAgain);

router.put('/changePassword',
    [
        body('currentPassword', 'Please enter a password with minimum length of 3')
            .trim()
            .isLength({min: 3}),
        body('newPassword', 'Please enter a password with minimum length of 3')
            .trim()
            .isLength({min: 3})
    ],
    validationCheck, checkAuth, UserController.changePassword);

router.get('/members', UserController.getMembers);

router.post('/forgot',
    [
        body('email').isEmail().withMessage('Please enter a valid email').normalizeEmail(),
    ],
    validationCheck, UserController.forgotPasswordEmail);

router.post('/reset',
    [
        body('email').isEmail().withMessage('Please enter a valid email').normalizeEmail(),
        body('password', 'Please enter a password')
            .trim()
            .isLength({min: 3}),
        body('hash', 'Hash')
            .trim()
            .isLength({min: 10}).withMessage('Invalid or expired reset link'),
    ],
    validationCheck, UserController.resetPassword);

module.exports = router;
