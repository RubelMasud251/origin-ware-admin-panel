import { Link } from "react-router-dom";

const Inventory = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Inventory</h3>
      <section className="w-full bg-white border shadow rounded-md">
        <div className="md:w-[44%] mx-auto py-12">
          <img
            className="mx-auto"
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/0c8a43219c5c1a08.svg"
            alt=""
          />
          <div className="flex flex-col gap-2 text-center ">
            <p className="font-semibold">Keep track of your inventory</p>
            <p>
              <small>
                When you enable inventory tracking on your products, you can
                view and adjust their inventory counts here.
              </small>
            </p>
            <Link to="">
              <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-bold">
                Go to product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* lern more link */}
      <div className="text-center mt-6">
        <p>
          Learn more about{" "}
          <Link to="" className="underline text-blue-600 ">
            managing inventory
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Inventory;
