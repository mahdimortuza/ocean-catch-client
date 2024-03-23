import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>Dash header</h1>
      {children}
      <h1>Dash footer</h1>
    </>
  );
};

export default DashboardLayout;
