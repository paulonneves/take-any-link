import { isSocialMediaLink } from './filters';
import { setTypeMedia,getUserName } from './maps';

export function findUserSocialMediaNames(array_link: Array<string>) {
    return array_link
            .filter(isSocialMediaLink)
            .map(setTypeMedia)
            .map(getUserName)
}