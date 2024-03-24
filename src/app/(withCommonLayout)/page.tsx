import CategorySection from "@/components/pageSections/Homepage/CategorySection";
import FlashSaleSection from "@/components/pageSections/Homepage/FlashSaleSection";
import HeroSection from "@/components/pageSections/Homepage/Hero";
import SubMenuSection from "@/components/pageSections/Homepage/SubMenuSection";
import TrendingProductsSection from "@/components/pageSections/Homepage/TrendingProductsSection";

export default function Home() {
  return (
    <>
      <SubMenuSection />
      <HeroSection />
      <FlashSaleSection />
      <CategorySection />
      <TrendingProductsSection />
    </>
  );
}
