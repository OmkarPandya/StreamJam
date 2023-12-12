import React from "react";

export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  textarea,
}) => {
  const handleValueChange = (e) => {
    onChangeHandler(e.target.value, field);
  };

  const handleInputBlur = (e) => {
    onBlurHandler(e.target.value, field);
  };

  return (
    <>
      <div>
      <label for="email" className="block mb-2 text-sm font-medium text-pink-900 ">{label}</label>

      </div>
      {textarea ? (
        <textarea
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          rows={5}
          style={{ maxWidth: "100%" , color:"rgb(189, 33, 59)"}}
          class="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white text-pink-500"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          style={{color:"rgb(189, 33, 59)"}}
          class=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white text-pink-500"
        />
      )}
      <div className="auth-form-validation-message">
        {showErrorMessage && validationMessage}
      </div>
    </>
  );
};
