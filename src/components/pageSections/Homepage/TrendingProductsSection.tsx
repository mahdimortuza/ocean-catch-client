import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TrendingProductCard from "@/components/TrendingProductCard/TrendingProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { TProduct } from "./FlashSaleSection";

const TrendingProductsSection = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products/", {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();

  const categories = [
    {
      name: "Salt water fish",
      key: "Salt water fish",
    },
    {
      name: "Sweet water fish",
      key: "Sweet water fish",
    },
    {
      name: "Lobster and Shrimps",
      key: "Lobster and Shrimps",
    },
    {
      name: "Squid and Crabs",
      key: "Squid and Crabs",
    },
    {
      name: "Small & Big Fish",
      key: "Small & Big Fish",
    },
    {
      name: "Caviar and Insects",
      key: "Caviar and Insects",
    },
  ];

  return (
    <Container className="py-10">
      <SectionTitle title="Shop our" highlight="Trending products" link="/" />
      <div className="pt-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="border border-[#008ECC] px-2 py-1 flex gap-2">
            <span>Filter by category</span> <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((category) => (
              <DropdownMenuItem key={category.key}>
                {category.name}
              </DropdownMenuItem>
            ))}{" "}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
                  productId={product._id}
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
