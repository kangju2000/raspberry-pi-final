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
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
