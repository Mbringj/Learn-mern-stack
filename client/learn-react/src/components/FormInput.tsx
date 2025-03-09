import { useState } from "react";

export default function FormInput() {
  const [value, setValue] = useState("Change me");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Valeur : {value}</p>
    </>
  );
}