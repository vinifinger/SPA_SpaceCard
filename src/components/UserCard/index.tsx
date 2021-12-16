import React, { useState } from 'react';
import { User } from '../../interfaces/user';
import { Typography } from '@material-ui/core';
import { 
    Instagram,
    LinkedCameraOutlined, LinkedIn, Telegram, Twitter, WhatsApp, YouTube
} from '@material-ui/icons';
import { 
    StyledCard, 
    StyledCardContent, 
    StyledCardMedia, 
    StyledContainer, 
    StyledLink,
    StyledLinkLinkedIn,
    StyledParagraphy
} from './styles';
import { pink } from '@material-ui/core/colors';


const UserCard: React.FC<User> = (props) => {
    return (
        <StyledContainer>
            <StyledCard id={props.hash}>
                <StyledCardMedia
                    image={props.imageUrl}
                    title={`${props.name} ${props.surname}`}
                />
                <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: 500 }} align='center'>
                        {props.name} {props.surname}
                    </Typography>
                    <StyledParagraphy>
                        { 
                            props.whatsapp 
                            ? 
                                <StyledLink href={props.whatsapp} target="_blank">
                                    <WhatsApp fontSize='large' className='whatsAppIcon'/>
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.linkedin 
                            ? 
                                <StyledLinkLinkedIn href={props.linkedin} target="_blank">
                                    <LinkedIn fontSize='large' className='linkedinIcon' />
                                </StyledLinkLinkedIn> 
                            : 
                                null
                        }
                        { 
                            props.instagram 
                            ? 
                                <StyledLink href={props.instagram} target="_blank">
                                    <Instagram fontSize='large' className='instagramIcon'/>
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.twitter 
                            ? 
                                <StyledLink href={props.twitter} target="_blank">
                                    <Twitter fontSize='large' className='twitterIcon'/>
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.youtube 
                            ? 
                                <StyledLink href={props.youtube} target="_blank">
                                    <YouTube fontSize='large' className='youtubeIcon'/>
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.telegram 
                            ? 
                                <StyledLink href={props.telegram} target="_blank">
                                    <Telegram fontSize='large' className='telegramIcon'/>
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