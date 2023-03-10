const express = require('express');
const controller = require('../../../controllers/front/auth.controller');
const { cpUpload } = require('../../../utils/upload')
const {authenticate}=require("../../../middlewares/front/auth")
const router = express.Router();
const path = require("path");

router.route('/register').post(cpUpload, controller.register);
router.route("/verify-email").get(controller.verify);
router.route("/login").post(controller.login)
router.route("/contact").post(controller.contact)
router.route('/question').post(authenticate,controller.question)
router.route("/answer").post(authenticate,controller.answer)
router.route("/votes").post(controller.votes)
router.route("/edit-profile").put(controller.editProfile)
module.exports = router;