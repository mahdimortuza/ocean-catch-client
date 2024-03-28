import Container from "@/components/Container";
import FlashSellProductCard from "@/components/FlashSellProductCard/FlashSellProductCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";

const FlashSalePage = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/products`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();
  return (
    <Container className="py-10">
      <SectionTitle
        title="Flash Sell offer on  "
        highlight="OceanCatch"
        link=""
      />
      <div className=" py-10 md:flex gap-5 ">
        <div className="w-[250px] mx-auto flex flex-col gap-1 px-1  text-center">
          <h1>Flash sale offer</h1>
          <div className="flex gap-1">
            <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
              <span>
                <span className="text-xl font-bold">36</span> <span>Day</span>
              </span>
            </div>

            <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
              <span>
                <span className="text-xl font-bold">36</span> <span>Hour</span>
              </span>
            </div>

            <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
              <span>
                <span className="text-xl font-bold">36</span> <span>Min</span>
              </span>
            </div>

            <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
              <span>
                <span className="text-xl font-bold">36</span> <span>Sec</span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:w-[640px] md:w-[500px] xl:w-[1000px] mt-10 md:mt-0">
          {products
            .filter((item: TProduct) => item.flashSale === true)
            .map((product: TProduct) => (
              <FlashSellProductCard
                key={product._id}
                image={product.image}
                title={product.title}
                offer={product.offer}
                productId={product._id}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default FlashSalePage;
