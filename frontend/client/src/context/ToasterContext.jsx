"use client";

import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
};

export default ToasterContext;
