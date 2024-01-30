import { WixDesignSystemProvider } from '@wix/design-system';

import Page from './MyPage';

import "@wix/design-system/styles.global.css";

function App() {
  return (
    <WixDesignSystemProvider>
      <Page/>
    </WixDesignSystemProvider>
  );
}

export default App;