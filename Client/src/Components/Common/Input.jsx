import React from "react";

const baseFieldStyles = `
  w-full rounded-xl border bg-white px-3.5 py-2.5
  text-sm text-slate-900
  outline-none transition-all duration-150
  placeholder:text-slate-400
  disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400
  focus:ring-4
`;

const getFieldStyles = (error) =>
  `${baseFieldStyles} ${
    error
      ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
      : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/10"
  }`;

const FieldLabel = ({ htmlFor, label, required }) => (
  <label
    htmlFor={htmlFor}
    className="mb-1.5 block text-sm font-medium text-slate-700"
  >
    {label}
    {required && (
      <span className="ml-1 text-red-500" aria-hidden="true">
        *
      </span>
    )}
  </label>
);

const FieldError = ({ id, error }) => {
  if (!error) return null;

  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-red-600">
      {error}
    </p>
  );
};

export const Input = ({
  id,
  name,
  label,
  type = "text",
  value,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  error,
  hint,
  required = false,
  disabled = false,
  readOnly = false,
  autoComplete,
  className = "",
  ...props
}) => {
  const errorId = id ? `${id}-error` : undefined;
  const hintId = id ? `${id}-hint` : undefined;

  return (
    <div className={`w-full ${className}`}>
      {label && <FieldLabel htmlFor={id} label={label} required={required} />}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={getFieldStyles(error)}
        {...props}
      />

      {error ? (
        <FieldError id={errorId} error={error} />
      ) : (
        hint && (
          <p id={hintId} className="mt-1.5 text-xs text-slate-500">
            {hint}
          </p>
        )
      )}
    </div>
  );
};

export const Select = ({
  id,
  name,
  label,
  value,
  defaultValue,
  onChange,
  onBlur,
  options = [],
  placeholder = "Select an option",
  error,
  hint,
  required = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const errorId = id ? `${id}-error` : undefined;
  const hintId = id ? `${id}-hint` : undefined;

  return (
    <div className={`w-full ${className}`}>
      {label && <FieldLabel htmlFor={id} label={label} required={required} />}

      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={`${getFieldStyles(error)} appearance-none pr-10`}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron */}
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        >
          <path
            d="M5.5 7.5L10 12L14.5 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {error ? (
        <FieldError id={errorId} error={error} />
      ) : (
        hint && (
          <p id={hintId} className="mt-1.5 text-xs text-slate-500">
            {hint}
          </p>
        )
      )}
    </div>
  );
};
