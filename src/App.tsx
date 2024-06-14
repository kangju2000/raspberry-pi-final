import { css } from '@emotion/react';

function App() {
  return <div css={testCss}>Hello world!</div>;
}

export default App;

const testCss = css({
  color: 'red',
  fontSize: 20,
});
