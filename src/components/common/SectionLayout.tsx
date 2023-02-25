import React, { PropsWithChildren } from 'react';
import { CommonComponentProps } from 'types/CommonComponentProps';

interface SectionLayoutProps extends PropsWithChildren<CommonComponentProps> {
  id?: string;
}

export const SectionLayout = ({
  children,
  classes,
  id
}: SectionLayoutProps) => {
  return (
    <section className={classes} id={id}>
      <div className="container">
        <div className="row h-100 no-gutters">{children}</div>
      </div>
    </section>
  );
};
