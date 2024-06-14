import { Global, css } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard Variable';
          src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');
        }

        .radix-themes {
          --default-font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
        }

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
