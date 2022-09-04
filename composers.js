"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserSocialMediaNames = void 0;
const filters_1 = require("./filters");
const maps_1 = require("./maps");
function findUserSocialMediaNames(array_link) {
    return array_link
        .filter(filters_1.isSocialMediaLink)
        .map(maps_1.setTypeMedia)
        .map(maps_1.getUserName);
}
exports.findUserSocialMediaNames = findUserSocialMediaNames;
