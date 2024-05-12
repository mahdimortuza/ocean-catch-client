"use client";
import Container from "@/components/Container";
import Autoplay from "embla-carousel-autoplay";

import assets from "@/assets";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ban from "../../../assets/banner/banner1.png";

const HeroSection = () => {
  const bannerItem = [
    {
      id: 1,
      heading: "Best deal online on SeaFood",
      description: "We are the best grab your favorite menu today",
      img: assets.banners.banner1,
    },
    {
      id: 2,
      heading: "Get best SeaFood from us",
      description: "Dishes are the best grab your favorite menu today",
      img: assets.banners.banner2,
    },
  ];
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Container className="my-10">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        style={{
          backgroundImage: `url('${ban}')`,
        }}
      >
        <CarouselContent className="">
          {bannerItem.map((item) => (
            <CarouselItem
              key={item.id}
              // className=" md:flex md:justify-between items-center px-5 py-5 md:px-24 md:py-10"
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
                  <Button className="mt-8 bg-[#2ac291] hover:bg-[#1f8967] text-white">
                    See more
                  </Button>
                </Link>
              </div>
              {/* <Image
                className="w-[350px] md:w-[250px] mx-auto md:mx-0"
                src={item.img}
                alt="banner1"
              /> */}

              <Image
                className="w-[350px] md:w-[250px] mx-auto md:mx-0"
                src={ban}
                alt="banner1"
              />
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
