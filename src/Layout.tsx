import { css } from '@emotion/react';
import * as Toast from '@radix-ui/react-toast';
import { Box } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <Box width="100vw" height="100dvh" style={{ backgroundColor: 'var(--gray-8)' }}>
      <Box
        width="100%"
        height="100%"
        position="relative"
        minWidth="360px"
        maxWidth="448px"
        mx="auto"
        style={{ backgroundColor: 'white' }}
      >
        <Toast.Provider>
          {children}
          <Toast.Viewport css={toastViewportCss} />
        </Toast.Provider>
      </Box>
    </Box>
  );
}

export default Layout;

const toastViewportCss = css({
  '--viewport-padding': '25px',
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});
