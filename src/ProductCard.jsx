/* eslint-disable react/prop-types */

const ProductCard = ({ title, description, imageUrl, price }) => {
  return (
    <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg m-4 ">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-black font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
