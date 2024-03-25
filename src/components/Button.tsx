import React from "react";
interface Props {
  children: String;
  onClick: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={"btn btn-primary"} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
export default Button;
