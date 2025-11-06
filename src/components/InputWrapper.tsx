import type { ComponentPropsWithoutRef } from "react";

type InputWrapperProps = {
  id: string;
  label: string;
  type?: string;
} & ComponentPropsWithoutRef<"input">;

export default function InputWrapper({
  id,
  label,
  type = "text",
  ...props
}: InputWrapperProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </p>
  );
}
