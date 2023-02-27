import React from 'react'
import * as S from './style'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const index = ({todo, setTodo}: Props) => {
  return (
    <S.InputField>
      <form action="">
        <input
        value={todo} 
        onChange={
            (e) => setTodo(e.target.value)
        }
        type="text" placeholder='Enter a task' />
        <button>Go</button>
      </form>
    </S.InputField>
  )
}

export default index
