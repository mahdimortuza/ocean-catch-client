"use client";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Tooltip } from "antd";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TProduct = {
  image: string;
  offer: number;
  title: string;
  price: number;
  _id: string;
  quantity: number;
  ratings: number;
};

const TrendingProductCard = (product: TProduct) => {
  const { image, offer, title, price, _id, ratings } = product;

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="relative  flex flex-col  justify-between border-[2px] border-[#D9D9D9]   hover:border-[#008ECC] rounded-xl">
        <Link href={`/products/${_id}`}>
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
        </Link>

        <div className="  px-2 flex items-end justify-between">
          <Link href={`/products/${_id}`}>
            <div>
              <h3 className="text-xl font-[600] mt-3">${price}</h3>
              <h1>{title}</h1>
              <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
            </div>
          </Link>
          <Tooltip title="Add to cart">
            <button onClick={() => handleAddToCart(product)} className="mb-2">
              <Plus className="text-white size-8 bg-red-500 rounded-full hover:rotate-90  transition-all duration-200" />
            </button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default TrendingProductCard;
