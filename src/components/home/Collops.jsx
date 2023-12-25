import { Link } from "react-router-dom";
import "./Home.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

const subItems1 = [
  {
    key: "1",
    label: <p className="font-semibold">Add your first product</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Add your first product</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Add Product
              </button>
            </Link>
            <Link to="">
              <button className=" hover:bg-gray-100 duration-700 text-black px-2 rounded-md py-1">
                import Product
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/home-onboarding-add-import-products-3ceb89e4fef1ee85d58fa00f9a3073a06b41d69463281060dcbee49c6d224904.svg"
          alt=""
        />
      </div>
    ),
  },
  {
    key: "2",
    label: <p className="font-semibold">Customize your online store</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Customize your online store</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Customize theme
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/customize-theme-task-d2760705452ef967a48b5fc4a6dce1ea9fc2fe4566dea18bb0927a746abb349f.svg"
          alt=""
        />
      </div>
    ),
  },
  {
    key: "3",
    label: <p className="font-semibold">Add your custom domain</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Add your custom domain</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Add domain
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/add-domain-task-01e03155d7729665c0d1c3eef8dc57baa87e69c20b4aab841010c1d7ba2d77ee.svg"
          alt=""
        />
      </div>
    ),
  },
];
const subItems2 = [
  {
    key: "1",
    label: <p className="font-semibold">Name your store</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Name your store</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Name store
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/set-store-name-task-22a8814a6dc23cb97dbefe245a73ce190f820d739341f2bab72f140eb8abc650.svg"
          alt=""
        />
      </div>
    ),
  },
  {
    key: "2",
    label: <p className="font-semibold">Set up a payment provider</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Set up a payment provider</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Set up payments
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/set-store-name-task-22a8814a6dc23cb97dbefe245a73ce190f820d739341f2bab72f140eb8abc650.svg"
          alt=""
        />
      </div>
    ),
  },
  {
    key: "3",
    label: <p className="font-semibold">Set up shopping rates</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Set up shopping rates</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Set shopping rates
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/set-store-name-task-22a8814a6dc23cb97dbefe245a73ce190f820d739341f2bab72f140eb8abc650.svg"
          alt=""
        />
      </div>
    ),
  },
];
const subItems3 = [
  {
    key: "1",
    label: <p className="font-semibold">Pic a plan</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Pic a plan</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Pic a plan
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/set-store-name-task-22a8814a6dc23cb97dbefe245a73ce190f820d739341f2bab72f140eb8abc650.svg"
          alt=""
        />
      </div>
    ),
  },
  {
    key: "2",
    label: <p className="font-semibold">Remove your store password</p>,
    content: (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Remove your store password</p>
          <p className="md:w-[80%] font-normal">
            Write a description, add photos, and set pricing for the products
            you plan to sell.{" "}
            <Link to="" className="text-blue-600">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="">
              <button className="text-white bg-[#1c1c1c] px-2 rounded-md py-1">
                Remove password
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/set-store-name-task-22a8814a6dc23cb97dbefe245a73ce190f820d739341f2bab72f140eb8abc650.svg"
          alt=""
        />
      </div>
    ),
  },
];

const items = [
  {
    key: "1",
    label: (
      <div className="">
        <p className="font-semibold">Setup guide</p>
        <p>Use this personalized guide to get your store up and running.</p>
      </div>
    ),
    content: (
      <Collapse accordion>
        <Panel header="Set up your online store" key="sub-accordions">
          <Collapse accordion>
            {subItems1.map((item) => (
              <Panel header={item.label} showArrow={false} key={item.key}>
                {item.content}
              </Panel>
            ))}
          </Collapse>
        </Panel>
        <Panel header="Store setting" key="sub-accordions2">
          <Collapse accordion>
            {subItems2.map((item) => (
              <Panel header={item.label} showArrow={false} key={item.key}>
                {item.content}
              </Panel>
            ))}
          </Collapse>
        </Panel>
        <Panel header="Launch your online store" key="sub-accordions3">
          <Collapse accordion>
            {subItems3.map((item) => (
              <Panel
                header={item.label}
                className="m-0 p-0"
                showArrow={false}
                key={item.key}
              >
                {item.content}
              </Panel>
            ))}
          </Collapse>
        </Panel>
      </Collapse>
    ),
  },
];

const Collops = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Collapse accordion onChange={onChange}>
      {items.map((item) => (
        <Panel header={item.label} key={item.key}>
          {item.content}
        </Panel>
      ))}
    </Collapse>
  );
};

export default Collops;
