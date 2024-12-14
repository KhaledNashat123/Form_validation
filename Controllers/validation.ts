import { check, ValidationChain } from "express-validator";

export const Inputs_validation = () : ValidationChain[] => {
    return [
        check("fullName")
            .notEmpty().withMessage("Full Name is required")
            .custom(value => {
                if (/\d/.test(value)) {  
                    throw new Error("Full Name can't have numbers");
                }
                return true;
            }),


        check("Email").isEmail().withMessage("invalid Email EX: Nashatinho@gmail.com"),


        check("Password")
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 8, max: 64 }).withMessage("Password must be between 8 and 64 characters")
            .matches(/[0-9]/).withMessage("Password must contain at least one number")
            .matches(/[a-z]/).withMessage("Password must contain at least one lowercase character")
            .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase character"),

        check("Confirm-Password")
            .notEmpty().withMessage("Confirm Password is required")
            .custom((value, { req }) => {
                if (value !== req.body.Password) {
                    throw new Error("Confirm Password must match Password");
                }
                return true;
            }),

        check("Birthdate")
            .isDate().withMessage("Birthdate is required")

    ];
};