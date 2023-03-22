import React from "react";
import Image from "next/image";
import chair_home from "../../public/assets/chair_home.jpg";



function IntoImages() {
  return (
    <div>
      <div className="chair_home">
      <Image src={chair_home} alt="Picture" width={0} height={0} className="first_chair"/>

     </div>
    </div>
  );
}

export default IntoImages;
