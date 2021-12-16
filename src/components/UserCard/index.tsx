import React from 'react';
import { User } from '../../interfaces/user';
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
    StyledLinkLinkedIn,
    StyledParagraphy
} from './styles';
import { Skeleton } from '@material-ui/lab';


const UserCard: React.FC<User> = (props) => {
    return (
        <StyledContainer>
            <StyledCard id={props.hash}>
                { props.imageUrl ?
                    <StyledCardMedia
                        image={props.imageUrl || 'https://www.instagram.com/p/CVOaS9lJZAY/'}
                        title={`${props.name} ${props.surname}`}
                    /> :
                    <Skeleton variant="rect" animation="wave" width={395} height={350} />
                } 
                
                <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: 500 }} align='center'>
                        {props.name} {props.surname}
                    </Typography>
                    <StyledParagraphy>
                        { 
                            props.whatsapp 
                            ? 
                                <StyledLink href={props.whatsapp} target="_blank">
                                    <WhatsApp fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.linkedin 
                            ? 
                                <StyledLink href={props.linkedin} target="_blank">
                                    <LinkedIn fontSize='large'  />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.instagram 
                            ? 
                                <StyledLink href={props.instagram} target="_blank">
                                    <Instagram fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.twitter 
                            ? 
                                <StyledLink href={props.twitter} target="_blank">
                                    <Twitter fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.youtube 
                            ? 
                                <StyledLink href={props.youtube} target="_blank">
                                    <YouTube fontSize='large' />
                                </StyledLink> 
                            : 
                                null
                        }
                        { 
                            props.telegram 
                            ? 
                                <StyledLink href={props.telegram} target="_blank">
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