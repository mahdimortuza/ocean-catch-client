import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
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
      <h1>All Products of OceanCatch</h1>
      <div className="">
      {products.map((product: TProduct) => (
        <ProductCard key={product._id} item={product} />
      ))}
      </div>
    </Container>
  );
};

export default AllProductsPage;
