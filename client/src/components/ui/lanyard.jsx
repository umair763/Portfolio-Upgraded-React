import React from "react";
import { Linkedin3dModel } from "./linkedin.3d.model";
import { Github3dModel } from "./github.3d.model";

export const Lanyard = ({}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  sm:grid-cols-2 items-start justify-center ">
        <Linkedin3dModel position={[0, 0, 20]} gravity={[0, -40, 0]} />
        <Github3dModel position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </>
  );
};
