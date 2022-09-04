"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserName = exports.setTypeMedia = void 0;
function setTypeMedia(link) {
    if (link.includes('facebook.com')) {
        return {
            socialMedia: 'facebook',
            userName: '',
            link: link
        };
    }
    if (link.includes('instagram.com')) {
        return {
            socialMedia: 'instagram',
            userName: '',
            link: link
        };
    }
    return {
        socialMedia: '',
        userName: '',
        link: link
    };
}
exports.setTypeMedia = setTypeMedia;
function getUserName(user) {
    const partition = user.link.split('.com/')[1];
    if (partition.includes('/')) {
        return {
            socialMedia: user.socialMedia,
            link: user.link,
            userName: partition.split('/')[0]
        };
    }
    return {
        socialMedia: user.socialMedia,
        link: user.link,
        userName: partition
    };
}
exports.getUserName = getUserName;
