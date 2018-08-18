import * as React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  reference: React.RefObject<any>;
}

export default ({ isVisible, reference }: BoxProps) => {
  const classList = isVisible ? 'box box--is-visible' : 'box';

  return (
    <div className={classList} ref={reference}>
      IsVisible: {isVisible ? 'true' : 'false'}
    </div>
  );
};
