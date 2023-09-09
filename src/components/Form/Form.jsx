import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const noRender = (event) =>{
    event.preventDefault()
    console.log(name)
    setName('')
  }
  const getNewValue = (event) =>{
    setName(event.target.value)
  }

  return (
    <form onSubmit={noRender}>
      <label>
        Name:
        <input  onChange ={getNewValue} value={name} type="text" />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
