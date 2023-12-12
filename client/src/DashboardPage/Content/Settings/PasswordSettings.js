import React, { useState } from "react";
import {
  passwordValidationMessage,
  validatePassword,
} from "../../../shared/validators";
import { Input } from "../../../shared/components";
import { useChangePassword } from "../../../shared/hooks";

const inputs = [
  {
    field: "password",
    label: "Current password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
  {
    field: "newPassword",
    label: "New password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
];

export const PasswordSettings = () => {
  const [formState, setFormState] = useState({
    password: {
      isValid: false,
      showError: false,
      value: "",
    },
    newPassword: {
      isValid: false,
      showError: false,
      value: "",
    },
  });

  const { changePassword } = useChangePassword();

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = validatePassword(value);

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const isSubmitButtonDisabled =
    !formState.password.isValid || !formState.newPassword.isValid;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    changePassword(formState.password.value, formState.newPassword.value);
  };

  return (
      <form className="settings-form-password bg-rose-50 text-pink-700 rounded-md shadow-lg">
        {inputs.map((input) => (
          <Input
            key={input.field}
            field={input.field}
            label={input.label}
            value={formState[input.field].value}
            onBlurHandler={handleInputValidationOnBlur}
            onChangeHandler={handleInputValueChange}
            showErrorMessage={formState[input.field].showError}
            validationMessage={input.validationMessage}
            type={input.type}
            className="text-pink-700 "
          />
        ))}
        <center>
          <button disabled={isSubmitButtonDisabled} onClick={handleFormSubmit} className="text-white bg-pink-700">
            Save changes
          </button>
        </center>
      </form>
  );
};
