type InputProps = {
  id: string;
  label: string;
  type?: string;
};

export default function Input({ id, label, type = "text" }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </p>
  );
}
