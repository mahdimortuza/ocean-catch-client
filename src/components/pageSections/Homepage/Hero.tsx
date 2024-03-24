"use client";
import Container from "@/components/Container";
import Autoplay from "embla-carousel-autoplay";

import assets from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Container>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className="flex justify-between">
            <h1>Best deal online on SeaFood</h1>
            <Image className="" src={assets.banners.banner1} alt="banner1" />
          </CarouselItem>
          <CarouselItem>
            <h1>Get best SeaFood from us</h1>
            <Image src={assets.banners.banner2} alt="banner2" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default HeroSection;
