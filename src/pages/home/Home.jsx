import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Collops from "../../components/home/Collops";
import { Divider } from "antd";

const Home = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
    console.log("first");
  };

  return (
    <div className="">
      {/* plan link pop up */}
      <div
        className={`bg-[#1c1c1c] w-full  text-gray-100 md:flex justify-between items-center p-4 md:rounded-md font-semibold ${
          close ? "hidden" : "block"
        }`}
      >
        <div className="mb-2 md:mb-0">
          <p className="text-sm">
            Extend your trial for $1/month for 3 months on select plans.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white rounded-md px-2 py-1 text-black text-sm">
            <Link to="">Select a Plan</Link>
          </button>
          <button onClick={handleClose}>
            <IoIosClose size={20} />
          </button>
        </div>
      </div>

      {/* Things to do next section */}
      <div className="">
        <p className="text-sm font-semibold mt-6 mb-3 px-4">
          Things to do next
        </p>
        <Collops />
      </div>

      <Divider>
        <p className="font-semibold text-sm">All caught up</p>
      </Divider>
    </div>
  );
};

export default Home;
