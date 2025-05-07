import { snackItems } from "../../constants";
import ListingTile from "../components/ListingTile";
const Products = () => {
  return (
    <div className="min-h-screen -mt-[56px] flex flex-col bg-mainWhite">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 xl:gap-6 mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2">
          {snackItems.map((data) => (
            <ListingTile key={data.key} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
