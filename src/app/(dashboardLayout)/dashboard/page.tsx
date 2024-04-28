"use client";
import { useGetSingeUserQuery } from "@/redux/api/userApi";

const DashboardPage = () => {
  const { data, isLoading } = useGetSingeUserQuery({});
  console.log(data);

  return (
    <div className="flex justify-center items-center h-[85vh]">
      <h1>Hi</h1>
    </div>
  );
};

export default DashboardPage;
