import Container from "@/components/Container";
import MyCartCard from "@/components/MyCartCard/MyCartCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { ScanLine, Trash2 } from "lucide-react";

const MyCartPage = async () => {
  return (
    <Container className="py-10">
      <SectionTitle title="Cart detail" highlight="summary" link="" />
      <div className="md:flex justify-between md:w-[900px] mx-auto">
        <div>
          <MyCartCard />
          <MyCartCard />
          <MyCartCard />
          <MyCartCard />
        </div>
        <div className="w-[380px] bg-[#FFDBA3] my-4 rounded-md flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-center my-2">
              Order Summary
            </h1>
            <div className="mx-5 mt-10 flex flex-col gap-4">
              <p className="text-lg">Selected Items: 20</p>
              <p className="text-lg">Total Price: $220</p>
              <p className="text-lg">Tax: $5</p>
              <p className="text-lg">Grand Total: $550</p>
            </div>
          </div>

          <div className="flex flex-col mx-5  my-5 gap-3">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-5 flex justify-between rounded-md">
              <span>Proceed checkout</span>
              <span>
                <ScanLine />
              </span>
            </button>
            <button className="bg-red-600 hover:bg-red-500 text-white py-3 px-5 flex justify-between rounded-md">
              <span>Clear Cart</span>
              <span>
                <Trash2 />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyCartPage;
