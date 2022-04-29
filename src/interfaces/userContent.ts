import { Social_media, Social_mediaValue } from "./social_media"
import { User, UserValue } from "./user"

export interface UserContent {
    user: User,
    social_media: Social_media
}

export const UserContentValue: UserContent = {
    user: UserValue,
    social_media: Social_mediaValue
}