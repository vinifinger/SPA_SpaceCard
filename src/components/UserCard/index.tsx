import React from 'react';
import { UserContent } from '../../interfaces/userContent';
import { Typography } from '@material-ui/core';
import { 
    Instagram,
    LinkedIn, 
    Telegram, 
    Twitter, 
    WhatsApp, 
    YouTube
} from '@material-ui/icons';
import { 
    StyledCard, 
    StyledCardContent, 
    StyledCardMedia, 
    StyledContainer, 
    StyledLink,
    StyledParagraphy
} from './styles';
import { Skeleton } from '@material-ui/lab';


const UserCard: React.FC<UserContent> = (props) => {
    return (
        <StyledContainer>
            <StyledCard id={props.user.hash}>
                { props.user.imageUrl ?
                    <StyledCardMedia
                        image={props.user.imageUrl || 'https://www.instagram.com/p/CVOaS9lJZAY/'}
                        title={`${props.user.name} ${props.user.surname}`}
                    /> :
                    <Skeleton variant="rect" animation="wave" width={395} height={350} />
                } 
                
                <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: 500 }} align='center'>
                        {props.user.name} {props.user.surname}
                    </Typography>
                    <StyledParagraphy>
                        { 
                            props.social_media.whatsapp 
                            ? 
                                <StyledLink href={props.social_media.whatsapp} target="_blank">
                                    <WhatsApp fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.social_media.linkedin 
                            ? 
                                <StyledLink href={props.social_media.linkedin} target="_blank">
                                    <LinkedIn fontSize='large'  />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.social_media.instagram 
                            ? 
                                <StyledLink href={props.social_media.instagram} target="_blank">
                                    <Instagram fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.social_media.twitter 
                            ? 
                                <StyledLink href={props.social_media.twitter} target="_blank">
                                    <Twitter fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.social_media.youtube 
                            ? 
                                <StyledLink href={props.social_media.youtube} target="_blank">
                                    <YouTube fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.social_media.telegram 
                            ? 
                                <StyledLink href={props.social_media.telegram} target="_blank">
                                    <Telegram fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                    </StyledParagraphy>
                </StyledCardContent>
            </StyledCard>
        </StyledContainer>
    )
};

export default UserCard;    