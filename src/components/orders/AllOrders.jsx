import { Link } from "react-router-dom";

const AllOrders = () => {
  return (
    <div>
      <div className="md:w-[44%] mx-auto">
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/shopifycloud/web/assets/v1/0ecc04f85cc74cb4.svg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Your orders will show here</p>
          <p>
            <small>
              To get orders and accept payments from customers, you need to
              select a plan. You’ll only be charged for your plan after your
              free trial ends.
            </small>
          </p>
          <Link to="">
            <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-semibold">
              Select plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
