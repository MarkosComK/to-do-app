import React, { useState } from 'react';
import InputField  from './components/inputfield/index';
import { GlobalStyle } from './styles/globalStyles';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  console.log(todo)
  return (
    <div>
      <GlobalStyle />
      <header>Taskify</header>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
