import React from 'react';
import { CommonComponentProps } from 'types/CommonComponentProps';

interface SectionTitleProps extends CommonComponentProps {
  text: string;
}

export const SectionTitle = ({ text, classes }: SectionTitleProps) => {
  return <div className={'section-title ' + classes}>{text}</div>;
};
