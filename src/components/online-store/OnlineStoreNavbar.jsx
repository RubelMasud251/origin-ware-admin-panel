import { Link } from "react-router-dom";
import { MdPushPin } from "react-icons/md";

const OnlineStoreNavbar = () => {
  return (
    <header className="border-b py-2 flex justify-between items-center -mt-4">
      <div className="flex items-center gap-2">
        <img
          className="w-4 h-4"
          src="https://cdn.shopify.com/s/files/applications/650f1a14fa979ec5c74d063e968411d4_512x512.png?1688746271"
          alt=""
        />
        <Link to="" className="font-medium hover:underline">
          Online store
        </Link>
      </div>
      <div className="flex items-center">
        <button className="font-extrabold hover:bg-white rounded-md px-2 py-1">
          <MdPushPin />
        </button>
        <button className="font-extrabold hover:bg-white rounded-md px-2">
          ...
        </button>
      </div>
    </header>
  );
};

export default OnlineStoreNavbar;
