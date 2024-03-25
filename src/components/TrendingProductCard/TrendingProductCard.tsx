import { Plus } from "lucide-react";
import Image from "next/image";

interface TProductProps {
  image: string;
  title: string;
  offer: number;
  price: number;
}

const TrendingProductCard = ({ image, title, offer, price }: TProductProps) => {
  return (
    <div className="relative h-[300px]  border-[2px] border-[#D9D9D9]   hover:border-[#008ECC] rounded-xl">
      <Image
        className="rounded-t-xl mx-auto"
        src={image}
        alt="image"
        width={300}
        height={100}
      />
      {offer ? (
        <h5 className=" absolute top-2 right-2 text-base font-[700]  text-white bg-red-500 w-[80px] py-1 rounded-3xl text-center  ">
          {offer}%
        </h5>
      ) : (
        ""
      )}

      <div className="  px-2 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-[600] mt-3">{title}</h1>
          <h3>{price}</h3>
        </div>
        <Plus className=" " />
      </div>
    </div>
  );
};

export default TrendingProductCard;
