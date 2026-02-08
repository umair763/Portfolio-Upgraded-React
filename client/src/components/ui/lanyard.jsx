import React from "react";
import { Linkedin3dModel } from "./linkedin.3d.model";
import { Github3dModel } from "./github.3d.model";

export const Lanyard = ({}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 items-start justify-center">
        <div
          className="[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_20%,black_20%,black_80%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_8%,black_50%,black_80%)] -mb-44 md:-mb-0 lg:-mb-0"
        >
          <Linkedin3dModel position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        <div
          className="[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_20%,black_20%,black_80%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_8%,black_50%,black_80%)]"
        >
          <Github3dModel position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </>
  );
};
