import React from 'react';

const CakeNavbar = () => {
  return (
    <nav className="cake-navbar">
      <div className="logo">Cake Bakery</div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/cakes">Cakes</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default CakeNavbar;
