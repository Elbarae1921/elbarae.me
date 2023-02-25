import React from 'react';
import { CommonComponentProps } from 'types/CommonComponentProps';

export const Loader = ({ classes }: CommonComponentProps) => {
  return (
    <div
      className={
        'work-loader position-absolute d-flex h-100 w-100 ' +
        (classes ? classes : '')
      }
    >
      <div className="spinner-border text-dark m-auto" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};
