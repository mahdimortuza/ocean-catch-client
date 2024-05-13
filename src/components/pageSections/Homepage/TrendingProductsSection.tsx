import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TrendingProductCard from "@/components/TrendingProductCard/TrendingProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { TProduct } from "./FlashSaleSection";

const TrendingProductsSection = async () => {
  const res = await fetch(`${process.env.base_api}/products/`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();

  return (
    <Container className="py-10">
      <SectionTitle
        title="Shop our"
        highlight="Trending products"
        link="/products"
      />

      <div className="py-10">
        <Carousel>
          <CarouselContent>
            {products.map((product: TProduct) => (
              <CarouselItem
                key={product._id}
                className="basis-1/1 md:basis-1/2 lg:basis-1/6"
              >
                <TrendingProductCard
                  image={product.image}
                  title={product.title}
                  offer={product.offer}
                  price={product.price}
                  _id={product._id}
                  quantity={product.quantity}
                  ratings={product.ratings}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default TrendingProductsSection;
