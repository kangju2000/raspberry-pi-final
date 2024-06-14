import { Theme } from '@radix-ui/themes';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Layout from './Layout.tsx';
import { GlobalStyles } from './styles/GlobalStyles.tsx';
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <Theme>
      <Layout>
        <App />
      </Layout>
    </Theme>
  </>
);
