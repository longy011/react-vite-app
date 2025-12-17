import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 30,
      }}
    >
      <h1>Weather App</h1>
      {children}
      <p>This is a footer, with love</p>
    </div>
  );
};

export default Layout;
