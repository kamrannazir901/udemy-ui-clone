import React from "react";
import Button from "../components/Button";
import { icons } from "../assets/Data";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-4 text-purple">{icons.clockIcon}</div>

      <h1 className="text-3xl font-semibold mb-2">Page Under Construction</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        We’re working hard to bring this page to life. Please check back soon!
      </p>

      <Button
        text="Back to Dashboard"
        icon="←"
        iconleft
        type="dark"
        className="!py-2 !px-6 !w-fit"
        onClick={() => window.history.back()}
      />
    </div>
  );
};

export default ComingSoon;
