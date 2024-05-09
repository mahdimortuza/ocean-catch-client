import assets from "@/assets";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const CategorySection = () => {
  const categories = [
    {
      img: assets.categories.lobster,
      name: "Lobster and Shrimps",
      link: "/products?category=Lobster and Shrimps",
    },
    {
      img: assets.categories.insects,
      name: "Caviar and Insects",
      link: "/products?category=Caviar and Insects",
    },
    {
      img: assets.categories.sweet,
      name: "Sweet water fish",
      link: "/products?category=Sweet Water Fish",
    },
    {
      img: assets.categories.slat,
      name: "Salt water fish",
      link: "/products?category=Salt water fish",
    },
    {
      img: assets.categories.smallBig,
      name: "Small & Big Fish",
      link: "/products?category=Small & Big Fish",
    },
    {
      img: assets.categories.squid,
      name: "Squid and Crabs",
      link: "/products?category=Squid and Crabs",
    },
  ];
  return (
    <Container className="py-10">
      <SectionTitle
        title="Shop from top categories"
        highlight="top categories"
        link="/products"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mt-10 w-full mx-auto">
        {categories.map((category) => (
          <div className="mx-auto" key={category.img}>
            <Link href={category.link}>
              <Image
                src={category.img}
                width={200}
                alt="category"
                className="rounded-full border border-[#008ECC]"
              />
            </Link>
            <h1 className="text-center text-base font-semibold mt-5">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategorySection;
