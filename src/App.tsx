import React from 'react';
import InputField  from './components/inputfield/index';
import { GlobalStyle } from './styles/globalStyles';

const App:React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <header>Taskify</header>
      <InputField />
    </div>
  );
}

export default App;
