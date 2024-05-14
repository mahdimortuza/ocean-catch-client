"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRef } from "react";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";

const HeroSection = () => {
  const bannerItem = [
    {
      id: 1,
      heading: "Best deal online on SeaFood",
      description: "We are the best grab your favorite menu today",
      img: banner1,
    },
    {
      id: 2,
      heading: "Get best SeaFood from us",
      description: "Dishes are the best grab your favorite menu today",
      // img: assets.banners.banner2,
      img: banner2,
    },
  ];
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Container className="my-10">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {bannerItem.map((item) => (
            <CarouselItem
              key={item.id}
              className=" md:flex md:justify-between items-center px-5 py-5 md:px-24 md:py-10"
              style={{
                backgroundImage: `url(${item.img.src})`,
                width: "100%",
                height: "100%",
              }}
            >
              <div className="text-white">
                <h2 className="text-xl md:text-3xl">Sale Offer up to 80%</h2>
                <h1 className=" text-3xl mt-3 md:text-5xl md:mt-5">
                  {item.heading}
                </h1>
                <p className="text-base mt-1 md:text-xl md:mt-1">
                  {item.description}
                </p>
                <Link href="/products">
                  <Button className="mt-8 bg-red-500 hover:bg-red-600 text-white">
                    See more
                  </Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>
    </Container>
  );
};

export default HeroSection;
