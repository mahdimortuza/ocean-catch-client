"use client";
import Container from "@/components/Container";
import MyCartCard from "@/components/MyCartCard/MyCartCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CircleAlert, ScanLine, Trash2 } from "lucide-react";
import Link from "next/link";

const MyCartPage = () => {
  const dispatch = useAppDispatch();
  const { products, tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Container className="py-10">
      <SectionTitle title="Cart detail" highlight="summary" link="" />
      {products.length >= 1 ? (
        <div className="md:flex justify-between md:w-[900px] mx-auto">
          <div>
            {products.map((product: TProduct) => (
              <MyCartCard key={product._id} product={product} />
            ))}
          </div>
          <div className="w-[360px] md:w-[400px] bg-[#FFDBA3] my-4 rounded-md flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-center my-2">
                Order Summary
              </h1>
              <div className="mx-5 mt-10 flex flex-col gap-4">
                <p className="text-lg">
                  <span className="font-bold">Selected Items:</span>{" "}
                  {selectedItems}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Total Price:</span> $
                  {totalPrice.toFixed(2)}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Tax {taxRate * 100}%:</span> $
                  {tax.toFixed(2)}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Grand Total</span> $
                  {grandTotal.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex flex-col mx-5  my-5 gap-3">
              <Link
                href="/checkout"
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-5 flex justify-between rounded-md"
              >
                <span>Proceed checkout</span>
                <span>
                  <ScanLine />
                </span>
              </Link>
              <button
                onClick={() => handleClearCart()}
                className="bg-red-600 hover:bg-red-500 text-white py-3 px-5 flex justify-between rounded-md"
              >
                <span>Clear Cart</span>
                <span>
                  <Trash2 />
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-8 w-full ">
          <h1 className="flex gap-4 items-center border border-red-500 py-4 px-4 rounded-lg">
            <span>
              <CircleAlert />
            </span>
            <span>Your cart is currently empty</span>
          </h1>
          <Link href="/products">
            <button className="text-lg rounded-full mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2">
              Return to shop
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default MyCartPage;
