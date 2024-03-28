import { Home, SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[250px] p-10 bg-[#dde0e2] h-screen">
      <ul>
        <Link href="/dashboard/all-products">
          <li
            className="flex items-center 
           gap-2 font-semibold px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white"
          >
            <SquareDashedMousePointer /> <span> All Products</span>
          </li>
        </Link>{" "}
        <Link href="/">
          <li className=" mt-2 flex items-center gap-2 font-semibold px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white">
            {" "}
            <Home />
            <span>Home</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
