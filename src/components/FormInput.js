import { useState } from "react";

// utils
import { generateUniqueId } from "../utils/generateUniqueId";

const initialInput = {
  username: "",
  password: "",
  age: 0,
  key: generateUniqueId(),
};

export default function FormInput() {
  const [inputFields, setInputFields] = useState([initialInput]);

  const onAddField = () => {
    const newInputField = {
      username: "",
      password: "",
      age: 0,
      key: generateUniqueId(),
    };

    setInputFields([...inputFields, newInputField]);
  };

  const onInputChange = (i, e) => {
    const { name, value } = e.target;
    let data = [...inputFields];

    data[i][name] = value;
    setInputFields(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert("Submit successful!");
  };

  return (
    <>
      <button onClick={onAddField}>+</button>
      <form onSubmit={onSubmit}>
        {inputFields.map((input, i) => (
          <div key={input.key}>
            <label>Username</label>
            <input
              name="username"
              type="text"
              value={input.username}
              placeholder="Username"
              onChange={(e) => onInputChange(i, e)}
            />
            <hr />
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={input.password}
              placeholder="password"
              onChange={(e) => onInputChange(i, e)}
            />
            <hr />
            <label>Age</label>
            <input
              name="age"
              type="number"
              value={input.age}
              placeholder="Age"
              onChange={(e) => onInputChange(i, e)}
            />
            <hr />
          </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
