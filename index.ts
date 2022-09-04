import { findUserSocialMediaNames } from './composers';

const array_test = [
    'https://www.instagram.com/ufoboficial/?hl=pt-br',
    'https://www.facebook.com/ufoboficial'
]

const socialNames = findUserSocialMediaNames(array_test);
console.log(socialNames);