import PropTypes from "prop-types";

const ListingTile = ({ data }) => {
  return (
    <div>
      <div className="w-full text-mainWhite bg-mainOrange rounded-lg p-2 m-auto">
        <div className="relative">
          <img
            src={data.img}
            className="w-full h-40 object-cover rounded-t-sm"
          />
          <p className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded "></p>
        </div>
        <div className="bg-white h-1/2 rounded-b-lg">{data.name}</div>
      </div>
    </div>
  );
};

ListingTile.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pricing: PropTypes.number.isRequired,
    quantities: PropTypes.array.isRequired,
    flavours: PropTypes.array.isRequired,
    leadTimeDays: PropTypes.number.isRequired,
  }).isRequired,
};
export default ListingTile;
