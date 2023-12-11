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
      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>

      </div>
      {textarea ? (
        <textarea
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          rows={5}
          style={{ maxWidth: "100%" }}
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      )}
      <div className="auth-form-validation-message">
        {showErrorMessage && validationMessage}
      </div>
    </>
  );
};
