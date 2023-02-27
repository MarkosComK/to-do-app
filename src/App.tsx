import { GlobalStyle } from "./styles/globalStyles";
import * as S from './index'
import InputField from "./components/inputfield";

// TypesCript explicit declaration of variable types
let name: string
let age: number
let isStudent: boolean
let hobbies: string[]
let role: [number, string]

// this code give an error (uncoment to see the error)
//role = [5, 5]
role = [5, 'edad']

// type object demonstrations

type Person = {
  name: string,
  // this question mark means that this property is optional
  age?: number
}

// this variable person will contain all the properties of the object Person{name: string, age: number}
let person: Person = {
  name: "Markos"
  // because of the question mark the age property is not necessary. If you take off the question mark you`ll see an error
}

// so if you want to create an array os persons(people):
let lotsOfPeople: Person[]

// also an variable can have two types for ex:
let age2: string | number
age2 = 23
age2 = "twenty three"
// both codes above don`t throw any error

// example using function
// if name property was not explicit declared you`ll see an error
function printName(name: string){
  console.log(name)
}
printName('Markos')

type X = {
  a: string,
  b: number
}
type Y = X &{
  c: string,
  d: number
}
// the syntax (Y = X &) makes Y be like
// type Y ={
//   a: string,
//   b: number,
//   c: string,
//   d: number
// }
// same thing can be done using interface for ex
interface PersonI {
  name: string,
  age?: number
}

interface Guy extends PersonI{
  profession: string
}
// the code above makes Guy had name: string, age?: number, profession: string
let y: Y ={
  c: 'string',
  d: 23,
  a: 'markos',
  b: 23
}

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
