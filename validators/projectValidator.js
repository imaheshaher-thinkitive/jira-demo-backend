const { check } = require("express-validator");

module.exports.projectValidator = {
    validateTitle:check('title').notEmpty().withMessage("Project title is required"),
    validateOwner:check('project_owner').notEmpty().withMessage("Project owner is required").isObject().withMessage("Project owner id should be object id")
}