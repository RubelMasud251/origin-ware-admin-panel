import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <div>
      <div className="">
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/shopifycloud/web/assets/v1/67d1bd2ad29c4adc.svg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">First up: what are you selling?</p>
          <p>
            <small>
              Before you open your store, first you need some products.
            </small>
          </p>
          <div className="flex  gap-4 items-center justify-center mt-2">
            <Link to="">
              <button className="border shadow px-4 rounded-md py-2 text-xs font-semibold">
                Find product to sell
              </button>
            </Link>
            <Link to="">
              <button className="border shadow px-4 rounded-md py-2 text-xs font-semibold">
                Import product
              </button>
            </Link>
            <Link to="">
              <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-semibold">
                Add yours products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
