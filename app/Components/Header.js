import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="bg-blue-950 flex flex-row justify-between items-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1530305408560-82d13781b33a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjBibHVlfGVufDB8fDB8fHww')`,
      }}
    >
      <Link href="/">
        <div className="flex items-center">
          <h2 className="text-white mr-4">BANK OF JUDAH</h2>
          <Image
            src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="banking image"
            width={50}
            height={50}
          />
        </div>
      </Link>
      <div className="flex space-x-4">
        <p className="text-white p-2">Routing Number: 346590564</p>
        <p className="text-white p-2">Locations</p>
        <p className="text-white p-2">Contacts</p>
      </div>
    </div>
  );
};

export default Header;
