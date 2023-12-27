import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import OnlineStoreNavbar from "../../components/online-store/OnlineStoreNavbar";
import AllPages from "../../components/online-store/AllPages";

const Pages = () => {
  return (
    <div>
      <OnlineStoreNavbar />
      {/* Main section */}
      <section className="mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold ">Pages</h3>
          <Link to="">
            <button className="text-white bg-[#292929] px-4 rounded-md py-2 text-xs font-bold">
              Add Page
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
        {/* discount products list  */}
        <div className="bg-white shadow rounded-lg p-6">
          <AllPages />
        </div>

        <div className="text-center mt-6">
          <p>
            Learn more about{" "}
            <Link to="" className="underline text-blue-600 ">
              Pages
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pages;
