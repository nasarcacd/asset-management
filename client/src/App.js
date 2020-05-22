import React from 'react';
import AssetsServices from './pages/assets-services/assets-services.component';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AssetsServices />
    </ThemeProvider>
  );
}

export default App;
