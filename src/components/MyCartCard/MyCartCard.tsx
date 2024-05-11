import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

const MyCartCard = () => {
  return (
    <div className="flex justify-between items-center my-5  w-[380px] border border-red-500 p-2 rounded-md   transition-all duration-200">
      <div className="">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full border border-zinc-500"
            src="https://raw.githubusercontent.com/mahdimortuza/ocean-catch-client/main/src/assets/images/bass.jpg"
            height={80}
            width={80}
            alt="product"
          />
          <div>
            <h2 className="text-2xl font-semibold text-red-500">Bass Small</h2>
            <p className="text-yellow-600 font-semibold text-sm mt-1">
              Price: $120
            </p>
            <div className="flex gap-4 mt-4">
              <p className=" text-lg font-medium">Qty: 10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <button className="">
          <Trash2 className="text-red-500 transition-all  w-10 h-10 p-2 duration-200 rounded-full hover:text-white hover:bg-red-500" />
        </button>
        <div className="mt-2 flex gap-2">
          <button>
            <Minus className="hover:bg-red-500 hover:text-white" />
          </button>
          <button>
            <Plus className="hover:bg-red-500 hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
