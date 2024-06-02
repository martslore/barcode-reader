import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";

const Topbar = () => {
  const startContent = <h3>Barcode Reader</h3>;

  const endContent = (
    <div className="flex flex-row align-items-center" >
      <span className="font-bold mr-2"> Demo </span>
      <Avatar
        label="D"
        size="large"
        shape="circle"
        className="bg-white-alpha-30"
      />
    </div>
  );

  return (
    <Toolbar start={startContent} end={endContent} className="bg-orange-400 px-2 text-white" />
  );
};

export default Topbar;
