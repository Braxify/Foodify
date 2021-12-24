import { ChangeEvent, useEffect, useState } from "react";
import { getKeys, validate } from "./validate";

const useForm = (fields: any) => {
  const [value, setValue] = useState(getKeys(fields));
  const [disabled, setDisabled] = useState(true);

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue((prevState: any) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    setDisabled(!validate(value, fields));
  }, [fields, value]);

  const cleanForm = () => {
    const keys: any = {};
    Object.keys(value).forEach((item: any) => {
      keys[item] = "";
    });
    setValue(keys);
  };

  return {
    value,
    disabled,
    changeHandler,
    cleanForm,
  };
};

export default useForm;
