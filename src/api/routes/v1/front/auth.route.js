const express = require('express');
const controller = require('../../../controllers/front/auth.controller');
const { cpUpload } = require('../../../utils/upload')
const {authenticate}=require("../../../middlewares/front/auth")
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

router.route('/register').post(cpUpload, controller.register);
router.route("/verify-email").get(controller.verify);
router.route("/login").post(controller.login)
router.route("/contact").post(controller.contact)
router.route('/question').post(authenticate,controller.question)
router.route("/edit-profile").put(controller.editProfile)
module.exports = router;