const HeroSection = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div>
      HeroSection
      <h1 className="border border-red-500 w-[100px] py-2 text-center">
        Click
      </h1>
      <div>
        {data.map((item: any) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default HeroSection;
