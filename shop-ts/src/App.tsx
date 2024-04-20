import React from 'react';

import Navigation from './routes/navigation/navigation.component';
import AppLoyout from './routes/apployout/apployout.component';

import { GlobalStyle } from './global.styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <AppLoyout />
    </div>
  );
}

export default App;
