import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaShareAltSquare } from 'react-icons/fa';
import "../../styles/Accesories/ShareSocialMedia.css";
import { useParams } from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

function ShareSocialMedia() {
    const { productId } = useParams();

    const shareUrl = `http://homu.online/product/${productId}`

    return (
        <Menu menuButton={<MenuButton className='buttonShareSocialMedia'><FaShareAltSquare className='iconShareSocialMedia'/></MenuButton>} transition>
                <MenuItem className='menuItemSocialMedia'>
                    <FacebookShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                        <BsFacebook className="iconShare" />
                    </FacebookShareButton>
                </MenuItem>
                <MenuItem className='menuItemSocialMedia'>
                    <TwitterShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                        <BsTwitter className="iconShare" />
                    </TwitterShareButton>
                </MenuItem>
                <MenuItem className='menuItemSocialMedia'>
                    <WhatsappShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                        <BsWhatsapp className="iconShare" />
                    </WhatsappShareButton>
                </MenuItem>
                <MenuItem className='menuItemSocialMedia'>
                    <LinkedinShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                        <BsLinkedin className="iconShare" />
                    </LinkedinShareButton>
                </MenuItem>
        </Menu>
        
    )
}

export default ShareSocialMedia;