import DataTable from "@/components/DataTable/DataTable";
import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const DashboardAllProducts = async () => {
  const res = await fetch(`${process.env.base_api}/products/`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();
  return (
    <div className="px-10">
      <Table>
        <TableCaption>List of our services.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>SL/NO</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Product name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: TProduct, index: number) => (
            <TableRow key={product._id}>
              <DataTable product={product} index={index} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardAllProducts;
