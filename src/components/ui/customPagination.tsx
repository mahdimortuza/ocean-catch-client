import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resPerPage, productsCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get("page") || 1;
  page = Number(page);

  const handlePageChange = (currentPage) => {};
  return (
    <div className="flex justify-center mt-20">
      <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={productsCount}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass="relative inline-flex items-center border 
        border-gray-300 bg-white px-4 py-2 text-sm font-medium 
        text-gray-500 hover:bg-gray-50 focus-z-20"
        activeLinkClass="z-10 inline-flex items-center border border-indigo-500
        bg-indigo-50 text-sm font-medium ext-indigo-600 focus:z-20"
        activeClass="z-10 inline-flex items-center border border-indigo-500
        bg-indigo-50 text-sm font-medium ext-indigo-600 focus:z-20"
      />
    </div>
  );
};

export default CustomPagination;
