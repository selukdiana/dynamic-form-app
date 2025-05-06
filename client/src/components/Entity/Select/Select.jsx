import { forwardRef } from "react";
import styles from "../Entity.module.css";

export const Select = forwardRef(
  (
    { onChange, onBlur, name, placeholder, className, options, errors },
    ref
  ) => {
    return (
      <div className={className}>
        <select
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        >
          <option value="" disabled selected>
            Select your {name}
          </option>
          {options &&
            options.map((value, index) => (
              <option value={index} key={value}>
                {value}
              </option>
            ))}
        </select>
        <span className={styles.error}>
          {errors[name] && errors[name].message}
        </span>
      </div>
    );
  }
);
