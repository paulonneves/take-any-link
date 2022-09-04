interface User{
    socialMedia: string,
    userName: string,
    link: string
}

export function setTypeMedia(link: string): User {
    if(link.includes('facebook.com')){
        return {
            socialMedia: 'facebook',
            userName: '',
            link: link
        }
    }

    if(link.includes('instagram.com')){
        return {
            socialMedia: 'instagram',
            userName: '',
            link: link
        }
    }
    return {
        socialMedia: '',
        userName: '',
        link: link
    }
}

export function getUserName(user: User): User {
    const partition = user.link.split('.com/')[1];
    if(partition.includes('/')){
        return {
            socialMedia: user.socialMedia,
            link: user.link,
            userName: partition.split('/')[0]
        }
    }
    return {
        socialMedia: user.socialMedia,
        link: user.link,
        userName: partition
    };
  }