import Footer from "@/components/shared/Footer";
import NavigationBar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div className={`h-full w-full max-w-[1024px] px-[24px] mx-auto`}>
        {children}
      </div>

      <Footer />
    </>
  );
};

export default CommonLayout;
