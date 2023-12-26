import { useState } from "react";
import "./Orders.css";
import { FaRegEye } from "react-icons/fa";
import { IoIosArrowDown, IoIosEyeOff } from "react-icons/io";
import AllOrders from "../../components/orders/AllOrders";
import { Link } from "react-router-dom";
import OrdersAnalyticsBar from "../../components/orders/OrdersAnalyticsBar";

const Orders = () => {
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(true);
  const [isMoreActionOpen, setIsMoreActionOpen] = useState(false);

  const toggleAnalytics = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  const toggleMoreAction = () => {
    setIsMoreActionOpen(!isMoreActionOpen);
    // Close the analytics bar when More action is clicked
  };

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Orders</h3>
        <div>
          <button
            onClick={toggleMoreAction}
            className="text-black bg-gray-200 rounded-md text-xs px-4 font-semibold py-2 flex items-center gap-1"
          >
            <span> More action</span>{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          {isMoreActionOpen && (
            <button
              className="absolute bg-white  mt-1 px-4 py-2 cursor-pointer rounded shadow-md animate-fadeIn"
              onClick={toggleMoreAction}
            >
              {isAnalyticsOpen ? (
                <>
                  <p
                    onClick={toggleAnalytics}
                    className="text-xs cursor-pointer"
                  >
                    <span>
                      <IoIosEyeOff />
                    </span>
                    Hide analytics bar
                  </p>
                </>
              ) : (
                <>
                  {" "}
                  <p
                    onClick={toggleAnalytics}
                    className="text-xs cursor-pointer"
                  >
                    <span>
                      <FaRegEye />
                    </span>
                    Show analytics bar
                  </p>
                </>
              )}
            </button>
          )}
        </div>
      </div>
      {isAnalyticsOpen && <OrdersAnalyticsBar />}
      {/* orders */}
      <div className="justify-center text-center bg-white border shadow p-12  rounded-lg mt-6">
        <AllOrders />
      </div>
      {/* lern more link */}
      <div className="text-center mt-6">
        <p>
          Learn more about{" "}
          <Link to="" className="underline text-blue-600 ">
            orders
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Orders;
