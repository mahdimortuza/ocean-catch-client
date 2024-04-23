import Container from "@/components/Container";
import Sidebar from "@/components/shared/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="flex">
      <Sidebar />
      {children}
    </Container>
  );
};

export default DashboardLayout;
