import Container from "@/components/Container";

const ProductDetailPage = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();
  const { data: productDetail } = product;
  console.log(productDetail);
  return (
    <Container>
      <h1>ProductDetailPage{productDetail.title} </h1>
    </Container>
  );
};

export default ProductDetailPage;
