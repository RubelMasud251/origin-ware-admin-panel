import { Link } from "react-router-dom";

const AllDiscounts = () => {
  return (
    <div className="">
      <img
        className="mx-auto"
        src="https://cdn.shopify.com/shopifycloud/web/assets/v1/67d1bd2ad29c4adc.svg"
        alt=""
      />
      <div className="flex flex-col gap-2 text-center">
        <p className="font-semibold">Write a blog post</p>
        <p>
          <small>
            Blog posts are a great way to build a community around your products
            and your brand.
          </small>
        </p>
        <div className="flex  gap-4 items-center justify-center mt-2">
          <Link to="">
            <button className="border shadow px-4 rounded-md py-2 text-xs font-semibold">
              Learn more
            </button>
          </Link>
          <Link to="">
            <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-semibold">
              Create blog post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllDiscounts;
