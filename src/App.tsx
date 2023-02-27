import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import * as S from './index'
import InputField from './components/inputfield';


const App:React.FC = () => {
  return (
    <S.App>
      <GlobalStyle />
      <header>Taskify</header>
      <InputField />
    </S.App>
  );
}

export default App;
