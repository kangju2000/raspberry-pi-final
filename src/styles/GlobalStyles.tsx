import { Global, css } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          -webkit-tap-highlight-color: transparent;
        }
        svg {
          vertical-align: middle;
        }
        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
}
