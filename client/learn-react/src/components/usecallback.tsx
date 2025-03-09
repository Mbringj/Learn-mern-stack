/**
 * A form component that demonstrates the use of useState and useCallback hooks.
 * 
 * This component renders an input field that updates its value in real-time
 * and displays the current value below the input.
 * 
 * @component
 * @returns {JSX.Element} A form with an input field and its current value display
 * 
 * @example
 * ```tsx
 * <Form />
 * ```
 */
import { useState, useCallback } from 'react';


export default function Form() {
  const [value, setValue] = useState("Change me");

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setValue(event.currentTarget.value);
  }, [setValue])


  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Valeur : {value}</p>
    </>
  );
}