import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSalesforce } from 'react-icons/si';

type IconType = 'github' | 'linkedin' | 'salesforce';

interface SocialIconProps {
  type: IconType;
  size?: number;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ type, size = 24 }) => {
  switch (type) {
    case 'github':
      return <FaGithub size={size} />;
    case 'linkedin':
      return <FaLinkedin size={size} />;
    case 'salesforce':
      return <SiSalesforce size={size} />;
    default:
      return null;
  }
};
