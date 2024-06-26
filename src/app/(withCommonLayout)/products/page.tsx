import Container from "@/components/Container";
import ProductsSidebar from "@/components/ProductsSidebar/ProductsSidebar";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TrendingProductCard from "@/components/TrendingProductCard/TrendingProductCard";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";
import SubMenuSection from "@/components/pageSections/Homepage/SubMenuSection";
import axios from "axios";
import queryString from "query-string";

const getProducts = async (searchParams: Record<string, unknown>) => {
  const urlParams = {
    searchTerm: searchParams.searchTerm,
    category: searchParams.category,
  };

  const searchQuery = queryString.stringify(urlParams);

  // console.log(searchQuery);

  const { data } = await axios.get(
    `${process.env.base_api}/products?${searchQuery}`
  );
  return data;
};
const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}) => {
  // const res = await fetch(`${process.env.base_api}/products/`, {
  //   cache: "no-store",
  // });
  // const { data: products } = await res.json();

  const allProducts = await getProducts(searchParams);

  const { data: products } = allProducts;
  // console.log(products);
  return (
    <Container className="py-10">
      <SubMenuSection line={false} />

      {/* All products are here  */}
      <SectionTitle title="All Products of" highlight=" OceanCatch" link="" />
      <div className="flex flex-col md:flex-row">
        <ProductsSidebar />
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-3  lg:gap-4">
          {products?.map((product: TProduct) => (
            <TrendingProductCard
              key={product._id}
              image={product.image}
              title={product.title}
              offer={product.offer}
              price={product.price}
              _id={product._id}
              quantity={product.quantity}
              ratings={product.ratings}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllProductsPage;
