import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";

type TProduct = {
  image: string;
  offer: number;
  title: string;
  price: number;
  productId: string;
  ratings: number;
};

const TrendingProductCard = ({
  image,
  offer,
  title,
  price,
  productId,
  ratings,
}: TProduct) => {
  return (
    <Link href={`/${productId}`}>
      <div className="relative h-[300px] flex flex-col  justify-between border-[2px] border-[#D9D9D9]   hover:border-[#008ECC] rounded-xl">
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

        <div className="  px-2 flex items-end">
          <div>
            <h3 className="text-xl font-[600] mt-3">${price}</h3>
            <h1>{title}</h1>
            <Rating style={{ maxWidth: 250 }} value={ratings} readOnly />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingProductCard;
