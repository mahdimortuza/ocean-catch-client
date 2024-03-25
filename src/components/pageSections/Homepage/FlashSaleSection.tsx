import Container from "@/components/Container";
import FlashSellProductCard from "@/components/FlashSellProductCard/FlashSellProductCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type TProduct = {
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
  const res = await fetch("http://localhost:5000/api/v1/products/");
  const { data: products } = await res.json();
  return (
    <Container className="py-10">
      <SectionTitle
        title="Grab the best seafood on our"
        highlight="Flash Sell offer"
        link="/"
      />
      <div className=" py-10">
        <Carousel>
          <CarouselContent>
            {products
              .filter((item: TProduct) => item.flashSale === true)
              .map((product: TProduct) => (
                <CarouselItem
                  key={product._id}
                  className="md:basis-1/2 lg:basis-1/6"
                >
                  {" "}
                  <FlashSellProductCard
                    image={product.image}
                    title={product.title}
                    offer={product.offer}
                  />{" "}
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default FlashSaleSection;
