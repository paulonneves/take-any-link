"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composers_1 = require("./composers");
const array_test = [
    'https://www.instagram.com/ufoboficial/?hl=pt-br',
    'https://www.facebook.com/ufoboficial'
];
const socialNames = (0, composers_1.findUserSocialMediaNames)(array_test);
console.log(socialNames);
