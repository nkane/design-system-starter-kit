import type { PropsWithChildren } from 'react';
import { variants, type CalloutVariants } from './callout-variants';

type CalloutProps = PropsWithChildren<CalloutVariants & { title: string }>;

export const Callout = ({ children, title, variant }: CalloutProps) => {
  return (
    <div className={variants({ variant })}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
