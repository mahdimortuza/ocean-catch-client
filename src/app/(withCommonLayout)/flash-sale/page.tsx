import Container from "@/components/Container";
import CountdownClock from "@/components/CountdownClock/CountdownClock";
import FlashSellProductCard from "@/components/FlashSellProductCard/FlashSellProductCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.base_api}/products`, {
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
          <CountdownClock />
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
                _id={product._id}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default FlashSalePage;
