import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from "react-query";
import getProducts from "../../services/products";
import Image from "next/image";

const SliderCards = (props) => {
  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    retry: 10,
    select: (data) => data[props.idx],
  });

  return (
    <div>
      {queryProducts.isLoading && (
        <div className="h-52 md:h-72 lg:h-96">
          <div className="w-11/12 h-full rounded-lg overflow-hidden flex flex-col justify-center items-center">
            <Skeleton height={200} width={200} />
          </div>
        </div>
      )}
      {queryProducts.data && (
        <div className="h-52 md:h-72 lg:h-96">
          <div className="w-11/12 h-full rounded-lg overflow-hidden flex flex-col justify-center items-center">
            <Image
              className="h-3/5 w-auto"
              src={queryProducts.data.image}
              width={1000}
              height={1000}
            />
            <span className="mt-2 uppercase text-xs">
              {queryProducts.data.name}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderCards;
