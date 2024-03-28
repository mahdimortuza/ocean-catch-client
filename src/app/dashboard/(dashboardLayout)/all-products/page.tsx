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
  const res = await fetch("http://localhost:5000/api/v1/products/", {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();
  console.log(products);
  return (
    <div className="px-10">
      <Table>
        <TableCaption>List of our services.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>SL/NO</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Service name</TableHead>
            <TableHead>Edit service</TableHead>
            <TableHead className="text">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: TProduct) => (
            <TableRow key={product._id}>
              <DataTable product={product} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardAllProducts;
