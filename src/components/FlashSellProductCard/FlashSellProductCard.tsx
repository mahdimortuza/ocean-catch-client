import Image from "next/image";
import Link from "next/link";

interface TFlashSellProps {
  image: string;
  title: string;
  offer: number;
  productId: string;
}

const FlashSellProductCard = ({
  image,
  title,
  offer,
  productId,
}: TFlashSellProps) => {
  return (
    <Link href={`/products/${productId}`}>
      <div className="flex flex-col border-[2px] border-[#D9D9D9]  hover:border-[#008ECC] rounded-xl">
        <Image
          className="rounded-t-xl mx-auto"
          src={image}
          alt="image"
          width={300}
          height={100}
        />
        <div>
          <h1 className="text-base font-[500] mt-3 text-center">{title}</h1>
          <h1 className="text-base font-[700]  text-red-500 bg-red-100 w-[80px] py-1 rounded-3xl my-2 text-center mx-auto">
            {offer}%
          </h1>
        </div>
      </div>{" "}
    </Link>
  );
};

export default FlashSellProductCard;
