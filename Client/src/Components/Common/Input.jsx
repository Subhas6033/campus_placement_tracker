import React from "react";

const baseFieldStyles = `
  w-full rounded-md border bg-white px-3.5 py-2.5
  text-[14px] text-ink
  outline-none transition-all duration-150
  placeholder:text-[#8a8d96]
  disabled:cursor-not-allowed disabled:bg-paper disabled:text-[#8a8d96]
`;

const getFieldStyles = (error) =>
  `${baseFieldStyles} ${
    error
      ? "border-[#b14a3c] focus:border-[#b14a3c] focus:ring-2 focus:ring-[#b14a3c]/10"
      : "border-ink-line focus:border-[#0e1116] focus:ring-2 focus:ring-[#0e1116]/5"
  }`;

const FieldLabel = ({ htmlFor, label, required }) => (
  <label
    htmlFor={htmlFor}
    className="mb-1.5 block text-[12.5px] font-medium tracking-wide text-ink"
  >
    {label}
    {required && (
      <span className="ml-1 text-danger" aria-hidden="true">
        *
      </span>
    )}
  </label>
);

const FieldError = ({ id, error }) => {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-danger">
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
          <p id={hintId} className="mt-1.5 text-xs text-ink-mute">
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
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a8d96]"
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
          <p id={hintId} className="mt-1.5 text-xs text-ink-mute">
            {hint}
          </p>
        )
      )}
    </div>
  );
};
