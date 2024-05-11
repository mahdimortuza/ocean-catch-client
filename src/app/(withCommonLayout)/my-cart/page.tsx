import Container from "@/components/Container";
import MyCartCard from "@/components/MyCartCard/MyCartCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const MyCartPage = async () => {
  return (
    <Container className="py-10">
      <SectionTitle title="Cart detail" highlight="summary" link="" />
      <div className="w-full mx-auto">
        <div className="md:flex gap-4">
          <div>
            <MyCartCard />
            <MyCartCard />
            <MyCartCard />
            <MyCartCard />
          </div>
          <div>cart information</div>
        </div>
      </div>
    </Container>
  );
};

export default MyCartPage;
