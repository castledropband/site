import * as React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaBandcamp,
  FaSoundcloud,
  FaRegCopyright,
} from 'react-icons/fa';

import social from 'consts/social';
import { MainContainer, Text, SocialContainer, SocialLink } from './style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: Array<{ link: string; icon: JSX.Element }> = [
    { link: social.instagram, icon: <FaInstagram /> },
    { link: social.twitter, icon: <FaTwitter /> },
    { link: social.bandcamp, icon: <FaBandcamp /> },
    { link: social.soundcloud, icon: <FaSoundcloud /> },
  ];

  return (
    <MainContainer>
      <Text>
        <FaRegCopyright /> {currentYear} Castle Drop
      </Text>
      <SocialContainer>
        {socialLinks.map(({ link, icon }) => (
          <SocialLink
            key={link}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {icon}
          </SocialLink>
        ))}
      </SocialContainer>
    </MainContainer>
  );
};

export default Footer;
