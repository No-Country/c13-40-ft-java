import Slider from "./components/slider/Slider";
import Slider2 from "./components/slider/Slider2";
import Image from "next/image";												

const Home = () => {
  return (
   <div className="w-full h-full flex justify-start items-center flex-col mt-8">
      <Image
        className="h-40 lg:h-72 object-cover"
        src="/Garden.png"
        width={2000}
        height={500}
      />
      <Slider />
      <Image
        className="md:hidden mt-4 h-6"
        src="/Divisor.png"
        width={500}
        height={100}
      />
      <Slider2 />
    </div>
  );
};

export default Home;
