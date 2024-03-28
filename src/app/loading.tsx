import { Progress } from "@/components/ui/progress";

import Container from "@/components/Container";

const Loader = () => {
  return (
    <Container className="flex flex-col items-center justify-center h-screen w-3/4 md:w-1/2">
      <Progress value={33} />
    </Container>
  );
};

export default Loader;
