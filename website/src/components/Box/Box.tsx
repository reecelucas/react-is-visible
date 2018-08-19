import * as React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  isVisible: boolean;
  reference: React.RefObject<any>;
}

export default ({ children, isVisible, reference }: BoxProps) => {
  const classList = isVisible ? 'box box--is-visible' : 'box';

  return (
    <div className={classList} ref={reference}>
      {children}
    </div>
  );
};
