import React from "react";
import Navbar from "../Navbar";

const Header: React.FC = () => {
  return (
    <header className="w-full absolute top-6">
      <Navbar />
    </header>
  );
};

export default Header;
