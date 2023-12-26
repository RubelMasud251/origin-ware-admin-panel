import { Link } from "react-router-dom";

const Customers = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Customers</h3>
      <section className="w-full bg-white border shadow rounded-md">
        <div className="md:w-[44%] mx-auto py-12">
          <img
            className="mx-auto"
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/93a30c07e111eac4.svg"
            alt=""
          />
          <div className="flex flex-col gap-2 text-center ">
            <p className="font-semibold">
              Everything customers-related in one place
            </p>
            <p>
              <small>
                Manage customer details, see customer order history, and group
                customers into segments.
              </small>
            </p>
            <div className="flex  gap-4 items-center justify-center mt-2">
              <Link to="">
                <button className="border shadow px-4 rounded-md py-2 text-xs font-semibold">
                  Import Customer
                </button>
              </Link>

              <Link to="">
                <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-semibold">
                  Add Customers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* lern more link */}
      <div className="text-center mt-6">
        <p>
          Learn more about{" "}
          <Link to="" className="underline text-blue-600 ">
            Customers
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Customers;
