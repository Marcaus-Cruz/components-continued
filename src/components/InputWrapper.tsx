import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type InputWrapperProps = {
  id: string;
  label: string;
  type?: string;
} & ComponentPropsWithoutRef<"input">;

const InputWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
  function InputWrapper(
    { id, label, type = "text", ...props }: InputWrapperProps,
    ref
  ) {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} {...props} ref={ref} />
      </p>
    );
  }
);

export default InputWrapper;
