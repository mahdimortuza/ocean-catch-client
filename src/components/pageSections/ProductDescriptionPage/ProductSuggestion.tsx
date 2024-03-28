import ProductCard from "@/components/ProductCard/ProductCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TProduct } from "../Homepage/FlashSaleSection";

const ProductSuggestion = async ({ category }: { category: string }) => {
  const res = await fetch(
    `https://ocean-catch-server.vercel.app/api/v1/products/`
  );
  const product = await res.json();
  const { data } = product;

  return (
    <div className="my-10">
      <SectionTitle
        title="Related product from"
        highlight="OceanCatch"
        link=""
      />
      <div className="py-5">
        <Carousel>
          <CarouselContent>
            {data
              .filter((item: TProduct) => item.category === category)
              .map((product: TProduct) => (
                <CarouselItem
                  key={product._id}
                  className="basis-1/1 sm:basis-1/ md:basis-1/2 lg:basis-1/4"
                >
                  <ProductCard item={product} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSuggestion;
