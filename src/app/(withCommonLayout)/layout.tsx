"use client";
import Footer from "@/components/shared/Footer";
import NavigationBar from "@/components/shared/Navbar";
import { useAppSelector } from "@/redux/hooks";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  const products = useAppSelector((store) => store.cart.products);
  return (
    <>
      <NavigationBar />
      {products.length ? (
        <div className="relative">
          <Link href="/my-cart">
            <div className="fixed right-0 flex justify-center items-center top-1/2 z-50 w-16 h-16 p-1 rounded-l-lg bg-red-500 text-white">
              <ShoppingBag />
              <p className="absolute right-1 top-2 text-sm bg-white text-red-500 px-1 rounded-md">
                {products.length}
              </p>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div> {children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
