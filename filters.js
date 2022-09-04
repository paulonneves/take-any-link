"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSocialMediaLink = void 0;
function isSocialMediaLink(link) {
    const condition = link.includes('facebook.com') ||
        link.includes('instagram.com');
    return condition;
}
exports.isSocialMediaLink = isSocialMediaLink;
