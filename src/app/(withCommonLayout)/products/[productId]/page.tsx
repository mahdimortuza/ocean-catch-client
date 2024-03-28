import Container from "@/components/Container";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";
import ProductSuggestion from "@/components/pageSections/ProductDescriptionPage/ProductSuggestion";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Check, Combine, Truck, X } from "lucide-react";
import Image from "next/image";

interface ProductId {
  params: {
    productId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://ocean-catch-server.vercel.app/api/v1/products"
  );
  const { data: products } = await res.json();

  return products.slice(0, 10).map((product: TProduct) => ({
    productId: product._id,
  }));
};

const ProductDetailPage = async ({ params }: ProductId) => {
  const res = await fetch(
    `https://ocean-catch-server.vercel.app/api/v1/products/${params.productId}`
  );
  const product = await res.json();
  const { data } = product;
  const {
    price,
    category,
    ratings,
    description,
    flashSale,
    image,
    optImage1,
    optImage2,
    optImage3,
    title,
  } = data;
  return (
    <Container className="py-10">
      <div className="md:flex justify-center p-5 gap-10 border border-x border-[#DEE2E7] rounded-lg">
        <div className="flex items-center flex-col ">
          <Image
            src={image}
            width={350}
            height={350}
            alt="product image"
            className="border border-x border-[#DEE2E7] rounded-lg"
          />
          <div className="flex mt-4 gap-5 p-2 ">
            {optImage1 ? (
              <Image
                src={optImage1}
                width={60}
                height={60}
                alt="opt image"
                className="p-1 border border-x border-[#DEE2E7] rounded-lg"
              />
            ) : (
              ""
            )}
            {optImage2 ? (
              <Image
                src={optImage2}
                width={60}
                height={60}
                alt="opt image"
                className="p-1 border border-x border-[#DEE2E7] rounded-lg"
              />
            ) : (
              ""
            )}
            {optImage3 ? (
              <Image
                src={optImage3}
                width={60}
                height={60}
                alt="opt image"
                className="p-1 border border-x border-[#DEE2E7] rounded-lg"
              />
            ) : (
              " "
            )}
          </div>
        </div>
        <div>
          {flashSale === true ? (
            <p className="flex items-center gap-1 font-semibold text-[#14e4a2]">
              <Check /> <span>Offer Available</span>
            </p>
          ) : (
            <p className="flex items-center gap-1 font-semibold text-red-500">
              <X />
              <span>No Offer Available</span>
            </p>
          )}
          <h1 className="mt-5 text-3xl font-bold text-[#1C1C1C]">{title}</h1>
          <p className=" text-sm text-[#787A80] mt-1">Category: {category}</p>
          <div className="flex items-center gap-2 mt-4">
            <Rating
              style={{ maxWidth: 100, marginTop: "5px" }}
              value={ratings}
              readOnly
            />
            <h4 className="text-red-600">{ratings} Ratting</h4>
          </div>
          <div className="bg-[#FFF0DF] m-2 py-2 flex gap-2 text-center items-center justify-center">
            <h4 className="">
              Offer Price:{" "}
              <span className="text-red-600 font-semibold ">${price}</span>
            </h4>
          </div>
          <div className="mt-10">
            <div className="flex gap-2">
              <Truck />
              <span>Free worldwide shipping on all orders over $100</span>
            </div>
            <div className="flex gap-2 mt-2">
              <Combine />
              <span>Delivers in: 3-7 Working Days Shipping & Return</span>
            </div>
          </div>
          <p className="mt-5">About product: {description}</p>
        </div>
      </div>
      <ProductSuggestion category={category} />
    </Container>
  );
};

export default ProductDetailPage;
