import { TableCell } from "@/components/ui/table";
import Image from "next/image";
import { TProduct } from "../pageSections/Homepage/FlashSaleSection";

const DataTable = ({
  product,
  index,
}: {
  product: TProduct;
  index: number;
}) => {
  const { _id, image, title, category, price } = product;
  const serial = _id.length;
  return (
    <>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <Image
          src="https://raw.githubusercontent.com/mahdimortuza/ocean-catch-client/main/src/assets/images/Clams%20Risotto.jpg"
          alt="img"
          width={40}
          height={40}
          className="rounded-full"
        />
      </TableCell>
      <TableCell>
        <h1 className="text-[18px] font-bold text-dark-blue">{title}</h1>
      </TableCell>
      <TableCell className="">{category} </TableCell>
      <TableCell className="text-red-500 font-semibold">${price}</TableCell>
    </>
  );
};

export default DataTable;
