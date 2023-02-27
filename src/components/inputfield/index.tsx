import React from 'react'
import * as S from './style'

const InputField:React.FC = () => {
  return (
    <S.InputField>
      <form action="">
        <input type="text" placeholder='Enter a task'/>
        <button>Go</button>
      </form>
    </S.InputField>
  )
}

export default InputField
