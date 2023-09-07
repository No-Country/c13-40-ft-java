import { useQuery } from "react-query";
import getProducts from "../../services/products";
import Image from "next/image";

const SliderCards = (props) => {
  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    retry: 10,
  });

  return (
    <div>
      {queryProducts?.data
        ?.filter((product) => product.id === props.id)
        .map((product) => (
          <div key={product.id} className="h-auto">
            <div className="w-11/12 h-full rounded-lg overflow-hidden flex flex-col justify-center items-center">
              <Image
                className=""
                src={product.image}
                width={1000}
                height={1000}
              />
              <span className="mt-2 text-xs">{product.name}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SliderCards;
