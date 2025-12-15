// By typing rafce the react component boilerplace is added
import { ReactNode } from "react";

// children is a special prop that all components suport
interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div>{children}</div>;
};

export default Alert;
