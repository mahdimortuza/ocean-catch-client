"use client";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import { CircleUserRound, ShoppingBag } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const SubMenuSection = ({ line }: { line: boolean }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const submitHandler = (e: FieldValues) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/products/?searchTerm=${searchTerm}`);
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <Container className="flex justify-between items-center gap-5  my-2 py-2">
        {/* submenu starts here  */}
        <div className="flex gap-5 justify-between">
          <Link href="/profile">
            <div className="text-red-500">
              <CircleUserRound className="mx-auto" />
              <span className=" text-xs">Profile</span>
            </div>
          </Link>

          <Link href="/cart">
            <div className=" text-[#EB708B]">
              <ShoppingBag className="mx-auto " />
              <span className=" text-xs">Cart</span>
            </div>
          </Link>
        </div>

        <form
          onSubmit={submitHandler}
          className="bg-[#F3F9FB] border border-transparent focus-within:border-blue-500 flex pl-6 pr-0 rounded-full h-9 lg:w-2/4   "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 mr-3 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none bg-transparent text-gray-600 font-semibold text-[15px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className=" bg-[#EB708B] hover:bg-[#ff1043] transition-all duration-100 rounded-tr-full rounded-br-full px-2 text-white">
            Search
          </button>
        </form>
      </Container>
      {/* <Separator /> */}
      {line === true ? <Separator /> : ""}
    </div>
  );
};

export default SubMenuSection;
