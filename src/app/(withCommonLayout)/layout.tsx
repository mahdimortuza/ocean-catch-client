import Footer from "@/components/shared/Footer";
import NavigationBar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div> {children}</div>

      <Footer />
    </>
  );
};

export default CommonLayout;
