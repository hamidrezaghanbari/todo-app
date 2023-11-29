type InputProps = {
  label?: string;
  stateHandler: {
    value: string;
    setState: (value: string) => void;
  };
  name: string;
  placeholder: string;
  type?: "text" | "password" | "checkbox";
  className?: string;
};

const Input = ({
  label = "",
  stateHandler,
  name,
  placeholder,
  type = "text",
  className = "w-full",
}: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="pb-1">{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        {...(type !== "checkbox" && { value: stateHandler.value })}
        {...(type == "checkbox" && { checked: !!stateHandler.value })}
        onChange={(e) => stateHandler.setState(e.target.value)}
        className="outline-none border-none rounded-md bg-white text-black h-8 px-2"
      />
    </div>
  );
};

export default Input;
