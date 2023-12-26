import { Link } from "react-router-dom";

const Segments = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Segments</h3>
      <section className="w-full bg-white border shadow rounded-md">
        <div className="md:w-[50%] mx-auto py-12">
          <img
            className="mx-auto"
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/28bdb4066d62a715.svg"
            alt=""
          />
          <div className="flex flex-col gap-2 text-center ">
            <p className="font-semibold">
              Create segments to personalize your customer experience
            </p>
            <p>
              <small>
                Customize your marketing emails or discount codes based on
                shared attributes and behaviours.
              </small>
            </p>
            <div className="flex  gap-4 items-center justify-center mt-2">
              <Link to="">
                <button className="border shadow px-4 rounded-md py-2 text-xs font-semibold">
                  Explore segments template
                </button>
              </Link>

              <Link to="">
                <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-semibold">
                  Create segment
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
            Segments
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Segments;
