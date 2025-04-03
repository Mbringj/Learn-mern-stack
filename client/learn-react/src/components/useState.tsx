import { useState } from "react";


export function CounterUI() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> tu viens de cliquer { count }</h1>
      <button onClick={() => setCount(count+1)}>click sur moi une fois</button>
    </div>
  )
}

export function ActionForm() {
  const [text, setText] = useState("bonjour");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p>le texte est : {text}</p>
    </div> 
  )
}