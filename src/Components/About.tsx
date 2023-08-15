import React from "react";

// eslint-disable-next-line react/display-name
const About = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="flex justify-center pt-20 max-sm:px-5">
      <div className="max-w-screen-md">
        <h1
          lang="en"
          className="flex justify-center w-16 py-2 mx-auto my-2 text-2xl font-medium text-center border-b-4 border-b-RepairingCenter-blue_500 "
        >
          About
        </h1>
        <p lang="en" className="max-w-sm text-center">
          We are working from the last 20 years here we have worked with around
          20 companies around the major cities of Saudi Arabia .Our team
          comprises skilled professionals who are dedicated to serving you and
          your electronic devices with their expertise and experience.
        </p>
      </div>
    </div>
  );
});

export default About;
