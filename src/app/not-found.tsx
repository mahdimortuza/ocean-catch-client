import Container from "@/components/Container";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Go Back Home
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
