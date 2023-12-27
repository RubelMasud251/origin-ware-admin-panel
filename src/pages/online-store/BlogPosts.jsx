import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import AllDiscounts from "../../components/discount/AllDiscounts";
import OnlineStoreNavbar from "../../components/online-store/OnlineStoreNavbar";

const BlogPosts = () => {
  return (
    <div>
      <OnlineStoreNavbar />
      {/* Main section */}
      <section className="mt-6">
        <h2 className="text-xl font-bold">Blog posts</h2>
        {/*remove password cart */}
        <div className="cart rounded-lg shadow my-6">
          <div className="p-4 rounded-t-lg font-semibold flex items-center gap-2 text-sm bg-yellow-400">
            <p>
              {" "}
              <CiLock size={16} />{" "}
            </p>
            <p>Your online store is password protected</p>
          </div>
          <div className="p-4 flex flex-col rounded-b-lg gap-2 bg-white">
            <p className="text-sm">
              {" "}
              Only visitors with your password can access your store. To let
              anyone browse and shop, remove the password.
            </p>
            <Link to="">
              <button className="border shadow px-4 rounded-md py-2 text-xs font-semibold">
                Import product
              </button>
            </Link>
          </div>
        </div>
        {/* discount products list  */}
        <div className="bg-white shadow rounded-lg p-6">
          <AllDiscounts />
        </div>
      </section>
    </div>
  );
};

export default BlogPosts;
