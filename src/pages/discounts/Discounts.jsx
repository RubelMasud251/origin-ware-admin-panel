import { Link } from "react-router-dom";

const Discounts = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-6">Discounts</h3>
        <Link to="">
          <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-bold">
            Create discount
          </button>
        </Link>
      </div>
      <section className="w-full bg-white border shadow rounded-md">
        <div className="md:w-[44%] mx-auto py-12">
          <img
            className="mx-auto"
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/b8d201c5328e302a.svg"
            alt=""
          />
          <div className="flex flex-col gap-2 text-center ">
            <p className="font-semibold">Manage discounts and promotions</p>
            <p>
              <small>
                Create discount codes and automatic discounts that apply at
                checkout. You can also use discounts with{" "}
                <Link to="" className="underline text-blue-600 ">
                  compare at prices.
                </Link>
              </small>
            </p>
            <Link to="">
              <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-bold">
                Create discount
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
            discount
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Discounts;
