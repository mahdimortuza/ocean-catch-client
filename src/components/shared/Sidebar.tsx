import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-[#dde0e2] text-white h-screen">
      <ul>
        <li>
          <Link href="/dashboard/all-products">All Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
