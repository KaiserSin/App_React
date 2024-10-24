import { useState } from "react";

export const useInputChange = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    reset,
    onChange: handleChange,
  };
};
