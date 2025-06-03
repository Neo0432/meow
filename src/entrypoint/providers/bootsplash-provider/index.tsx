import {ReactNode, useState} from 'react';
import {AnimatedBootSplash} from '@screens/splash';

export const BootSplashProvider = ({children}: {children: ReactNode}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {children}
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
    </>
  );
};
