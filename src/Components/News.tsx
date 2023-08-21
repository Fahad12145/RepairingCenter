import React from "react";

// eslint-disable-next-line react/display-name
const News = () => {
  return (
    <div className="flex justify-center pt-20 max-sm:px-5">
      <div className="max-w-screen-md">
        <h1
          lang="en"
          className="flex justify-center w-40 py-2 mx-auto my-2 text-2xl font-medium text-center border-b-4 border-b-RepairingCenter-orange"
        >
          Latest News
        </h1>
        <div lang="en" className="max-w-sm text-center">
          <span className="font-semibold text-center">Good News !</span>
          <br />
          <p>
            We have started the sale and purchase of the home appliances like :
          </p>
          <ul className="">
            <li className="hover:text-xl hover:font-medium">Electric Oven</li>
            <li className="hover:text-xl hover:font-medium">Electric Stove</li>
            <li className="hover:text-xl hover:font-medium">Refrigerator</li>
            <li className="hover:text-xl hover:font-medium">
              Washing Machine{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
