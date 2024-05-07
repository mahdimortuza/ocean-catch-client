import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductsSidebar from "@/components/ProductsSidebar/ProductsSidebar";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";
import SubMenuSection from "@/components/pageSections/Homepage/SubMenuSection";

const AllProductsPage = async () => {
  const res = await fetch(`${process.env.base_api}/products/`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();

  return (
    <Container className="py-10">
      <SubMenuSection line={false} />

      {/* All products are here  */}
      <SectionTitle title="All Products of" highlight=" OceanCatch" link="" />
      <div className="flex">
        <ProductsSidebar />
        <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-2 md:gap-3  lg:gap-4">
          {products.map((product: TProduct) => (
            <ProductCard key={product._id} item={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllProductsPage;
