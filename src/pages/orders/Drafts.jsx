import { Link } from "react-router-dom";

const Drafts = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Drafts orders</h3>
      <section className="w-full bg-white border shadow rounded-md">
        <div className="md:w-[44%] mx-auto py-12">
          <img
            className="mx-auto"
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/0ecc04f85cc74cb4.svg"
            alt=""
          />
          <div className="flex flex-col gap-2 text-center ">
            <p className="font-semibold">Your orders will show here</p>
            <p>
              <small>
                To get orders and accept payments from customers, you need to
                select a plan. You’ll only be charged for your plan after your
                free trial ends.
              </small>
            </p>
            <Link to="">
              <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-bold">
                Create draft order
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
            Creating draft orders
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Drafts;
