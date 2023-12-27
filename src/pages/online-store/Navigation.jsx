import { Link } from "react-router-dom";
import OnlineStoreNavbar from "../../components/online-store/OnlineStoreNavbar";
import { CiLock } from "react-icons/ci";
import CreateNavigation from "../../components/online-store/CreateNavigation";

const Navigation = () => {
  return (
    <div>
      <OnlineStoreNavbar />
      <section className="mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold ">Pages</h3>
          <Link to="">
            <button className="text-black bg-gray-200 rounded-md text-xs px-4 font-semibold py-2 flex items-center gap-1">
              View URL redirect
            </button>
          </Link>
        </div>
        {/*remove password cart */}
        <div className="cart rounded-lg shadow my-6">
          <div className="p-4 rounded-t-lg font-semibold flex items-center gap-2 text-sm bg-yellow-400">
            <p>
              {" "}
              <CiLock size={16} />{" "}
            </p>
            <p>Your online store is password protected</p>
          </div>
          <div className="p-4 flex  flex-col rounded-b-lg gap-2 bg-white">
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
        {/* create navigation */}
        <CreateNavigation />

        <div className="text-center mt-6">
          <p>
            Learn more about{" "}
            <Link to="" className="underline text-blue-600 ">
              menus
            </Link>
            <span className="mx-1"> and</span>
            <Link to="" className="underline text-blue-600 ">
              filter
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
