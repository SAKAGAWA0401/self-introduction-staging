import React from 'react';
import { SocialIcon } from './SocialIcon';

interface SocialLinksProps {
  githubUrl: string;
  linkedinUrl: string;
  salesforceUrl: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  githubUrl,
  linkedinUrl,
  salesforceUrl
}) => {
  return (
    <div className="flex space-x-4 items-center">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <SocialIcon type="github" />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <SocialIcon type="linkedin" />
      </a>
      <a
        href={salesforceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <SocialIcon type="salesforce" />
      </a>
    </div>
  );
};
