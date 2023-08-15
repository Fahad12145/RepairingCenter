import React from "react";

const Testimonial = () => {
  const Reviews = [
    {
      review:
        " I hold great admiration for their work. Their team consists of extremely experienced and collaborative staff who operate effectively, delivering results promptly. I strongly recommend their services.",
      name: "Fahad Ali",
    },
    {
      review:
        " I hold great admiration for their work. Their team consists of extremely experienced and collaborative staff who operate effectively, delivering results promptly. I strongly recommend their services.",
      name: "Fahad Ali",
    },
    {
      review:
        " I hold great admiration for their work. Their team consists of extremely experienced and collaborative staff who operate effectively, delivering results promptly. I strongly recommend their services.",
      name: "Fahad Ali",
    },
    {
      review:
        " I hold great admiration for their work. Their team consists of extremely experienced and collaborative staff who operate effectively, delivering results promptly. I strongly recommend their services.",
      name: "Fahad Ali",
    },
  ];
  return (
    <div className="flex items-center justify-center max-w-screen-md gap-10 py-10 mx-auto max-sm:px-10 max-largeTablet:flex-col max-sm:flex-col">
      <div className="max-w-sm mx-auto space-y-3 ">
        <h5 className="border-b-4 w-7 border-b-RepairingCenter-primary">
          Testimonial
        </h5>
        <h1 className="text-4xl font-semibold ">Our Client Said </h1>
        <p className="text-xs">
          Our team comprises skilled professionals who are dedicated to serving
          you and your electronic devices with their expertise and experience.
        </p>
        <button className="p-3 mt-5 bg-RepairingCenter-blue_500 text-RepairingCenter-white">
          Read All Reviews
        </button>
      </div>
      <div className="flex space-x-5 overflow-x-auto w-96 max-sm:w-80 max-sm:mx-5 ">
        {Reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="min-w-fit p-5 overflow-hidden bg-[#EEFAFF]"
            >
              <svg
                width="40"
                height="27"
                viewBox="0 0 40 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8318 23.625C25.3894 25.875 27.8505 27 31.2149 27C33.8318 27 35.9501 26.3007 37.5701 24.902C39.19 23.4426 40 21.527 40 19.1554C40 16.6622 39.2523 14.7466 37.757 13.4088C36.2617 12.0101 34.2679 11.3108 31.7757 11.3108C28.8473 11.3108 26.5732 12.2534 24.9533 14.1385C24.8287 13.7128 24.7664 13.0439 24.7664 12.1318C24.7664 10.9763 24.9221 9.97297 25.2336 9.12162C25.7321 7.60135 26.6044 6.1723 27.8505 4.83446C29.1589 3.43581 30.623 2.37162 32.243 1.64189L31.4019 0C28.162 1.45946 25.7009 3.52702 24.0187 6.2027C22.3364 8.87838 21.4953 11.7973 21.4953 14.9595C21.4953 16.7838 21.7134 18.4561 22.1495 19.9763C22.5857 21.4966 23.1464 22.7128 23.8318 23.625Z"
                  fill="#2ea2cc"
                />
                <path
                  d="M2.33645 23.625C3.89408 25.875 6.35514 27 9.71963 27C12.3364 27 14.4548 26.3007 16.0748 24.902C17.6947 23.4426 18.5047 21.527 18.5047 19.1554C18.5047 16.6622 17.757 14.7466 16.2617 13.4088C14.7664 12.0101 12.7726 11.3108 10.2804 11.3108C7.35202 11.3108 5.07788 12.2534 3.45794 14.1385C3.33333 13.7128 3.27103 13.0439 3.27103 12.1318C3.27103 10.9763 3.42679 9.97297 3.73832 9.12162C4.23676 7.60135 5.10903 6.1723 6.35514 4.83446C7.66355 3.43581 9.12772 2.37162 10.7477 1.64189L9.90654 0C6.66667 1.45946 4.20561 3.52702 2.52336 6.2027C0.841121 8.87838 0 11.7973 0 14.9595C0 16.7838 0.218069 18.4561 0.654206 19.9763C1.09034 21.4966 1.65109 22.7128 2.33645 23.625Z"
                  fill="#2ea2cc"
                />
              </svg>
              <p className="mt-3 text-sm font-medium text-RepairingCenter-blue_500">
                {review.review}
              </p>
              <span className="flex mt-5 text-xl font-semibold text-RepairingCenter-blue_500 ">
                {review.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
