import React from "react";
import { Linkedin3dModel } from "./linkedin.3d.model";
import { Github3dModel } from "./github.3d.model";

export const Lanyard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center max-w-5xl mx-auto">
      <div
        className="[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,black_30%,black_85%)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,black_30%,black_85%)]"
      >
        <Linkedin3dModel position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      <div
        className="[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,black_30%,black_85%)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,black_30%,black_85%)]"
      >
        <Github3dModel position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
};
