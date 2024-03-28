import { Home, ScanFace, SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[250px] col-span-2 bg-slate-100 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 font-inter">
      <ul>
        <Link href="/dashboard">
          <li
            className="flex items-center 
           gap-2 font-semibold px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white"
          >
            <ScanFace /> <span> Dashboard</span>
          </li>
        </Link>{" "}
        <Link href="/dashboard/all-products">
          <li
            className="  mt-2 flex items-center 
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
