export interface User {
    user: {
        hash: string,
        name: string,
        surname: string,
        email: string,
        bio: string,
        username: string,
        telephone: string,
        imageUrl: string
    },
    social_media: {
        facebook: string,
        linkedin: string,
        twitter: string,
        password: string,
        instagram: string,
        whatsapp: string,
        telegram: string,
        tiktok: string,
        spotify: string,
        youtube: string,
        wildcard_1: string,
        wildcard_2: string,
        wildcard_3: string
    }
}

export const UserValue: User = {
    user: {
        hash: '',
        name: '',
        surname: '',
        email: '',
        bio: '',
        username: '',
        telephone: '',
        imageUrl: ''
    },
    social_media: {
        facebook: '',
        linkedin: '',
        twitter: '',
        password: '',
        instagram: '',
        whatsapp: '',
        telegram: '',
        tiktok: '',
        spotify: '',
        youtube: '',
        wildcard_1: '',
        wildcard_2: '',
        wildcard_3: ''
    }
}