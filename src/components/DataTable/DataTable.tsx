import { TableCell } from "@/components/ui/table";
import { TProduct } from "../pageSections/Homepage/FlashSaleSection";

const DataTable = ({ product }: { product: TProduct }) => {
  return (
    <>
      <TableCell>index</TableCell>
      <TableCell>image</TableCell>
      <TableCell>
        <h1 className="text-[18px] font-bold text-dark-blue">nme</h1>
      </TableCell>
      <TableCell className="text-right">prise </TableCell>
      <TableCell className="text-right">item</TableCell>
    </>
  );
};

export default DataTable;
