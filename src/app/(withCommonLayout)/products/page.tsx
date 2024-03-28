import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductsSidebar from "@/components/ProductsSidebar/ProductsSidebar";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";

const AllProductsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products/", {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();

  return (
    <Container className="py-10">
      <SectionTitle title="All Products of" highlight=" OceanCatch" link="" />
      <div className="flex">
        <ProductsSidebar />
        <div className=" py-10 grid grid-cols-6  gap-2">
          {products.map((product: TProduct) => (
            <ProductCard key={product._id} item={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllProductsPage;
