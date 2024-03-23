const HeroSection = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return <div>Hero section</div>;
};

export default HeroSection;
