import Container from "@/components/Container";
import CountdownClock from "@/components/CountdownClock/CountdownClock";
import FlashSellProductCard from "@/components/FlashSellProductCard/FlashSellProductCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export type TProduct = {
  title: string;
  image: string;
  optImage1: string;
  price: number;
  category: string;
  ratings: number;
  description: string;
  flashSale: boolean;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  offer: number;
  __v: number;
};

const FlashSaleSection = async () => {
  const res = await fetch(
    `https://ocean-catch-server.vercel.app/api/v1/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: products } = await res.json();
  return (
    <Container className="py-10">
      <SectionTitle
        title="Grab the best seafood on our"
        highlight="Flash Sell offer"
        link="/products"
      />
      <div className=" py-10 md:flex gap-5 items-center">
        <div className="w-[250px] mx-auto flex flex-col gap-1 px-1  text-center">
          <CountdownClock />
        </div>

        <div className="sm:w-[640px] md:w-[500px] xl:w-[1000px] mt-10 md:mt-0">
          <Carousel>
            <CarouselContent>
              {products
                .filter((item: TProduct) => item.flashSale === true)
                .map((product: TProduct) => (
                  <CarouselItem
                    key={product._id}
                    className="basis-1/1 sm:basis-1/ md:basis-1/2 lg:basis-1/4"
                  >
                    {" "}
                    <FlashSellProductCard
                      image={product.image}
                      title={product.title}
                      offer={product.offer}
                      productId={product._id}
                    />{" "}
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default FlashSaleSection;
