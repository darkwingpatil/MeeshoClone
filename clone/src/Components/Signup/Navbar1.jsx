import React from 'react'
import { Link } from 'react-router-dom'

function Navbar1() {
 

  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* <a className="nav-item dropdown" href="#">Home <span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item dropdown">
            <div className="d-flex justify-content-around" id="jennystyle">
              

              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Women Western
              </a>
              </div>

              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch" id="jennystyle1">
              <div>
              <a className="dropdown-item1" >Topwear</a>

                <Link to="/men"><a className="dropdown-item" >Dresses</a></Link>
                <Link to="/men"><a className="dropdown-item" >Sweater</a></Link>

                <a className="dropdown-item" href="#">Jumpsuits</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#">Jeans</a>
                <a className="dropdown-item" href="#">Jeggings</a>
                <a className="dropdown-item" href="#">Palazzos</a>
                <a className="dropdown-item" href="#">Shorts</a>
                <a className="dropdown-item" href="#">Skrits</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#">Innerwear</a>
                <a className="dropdown-item" href="#">Bra</a>
                <a className="dropdown-item" href="#">Briefs</a>
              </div>

              

              <div>
              <a className="dropdown-item1" href="#">Sleepwear</a>
                <a className="dropdown-item" href="#">Nightsuits</a>
                <a className="dropdown-item" href="#">babydolls</a>
              </div>  
                </div>
                </div>
                </li>
                <li className="nav-item dropdown">
                  
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Jewellery & Accessories
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch ">
              <div>
              <a className="dropdown-item1" href="#" >Jewellery</a>
                <a className="dropdown-item" href="#">Jewellery Set</a>
                <a className="dropdown-item" href="#">Mangalsutras</a>
                <a className="dropdown-item" href="#">Studs</a>
                <a className="dropdown-item" href="#">Rings</a>
                <a className="dropdown-item" href="#">Anklets</a>
                <a className="dropdown-item" href="#">Bangles</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Women Accessory</a>
              <a className="dropdown-item" href="#">Bags</a>
              <a className="dropdown-item" href="#">Watches</a>
              <a className="dropdown-item" href="#">Hair Accessories</a>
              <a className="dropdown-item" href="#">Sunglasses</a>
              <a className="dropdown-item" href="#">Socks</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#"></a>
              </div>
              </div>

              </div>
            </li>

              <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Men
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="http://localhost:3006/" >Top</a>
                <a className="dropdown-item" href="http://localhost:3006/">All Top Wear</a>
                <a className="dropdown-item" href="http://localhost:3006/">Tshirts</a>
                <a className="dropdown-item" href="http://localhost:3006/">Shirts</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Bottom Wear </a>
              <a className="dropdown-item" href="#">Track Pants</a>
              <a className="dropdown-item" href="#">Jeans</a>
              <a className="dropdown-item" href="#">Trousers </a>
              </div>

              <div>
              <a className="dropdown-item1" href="#">Men Accsessories </a>
              <a className="dropdown-item" href="#"> Watches</a>
              <a className="dropdown-item" href="#">Belts</a>
              <a className="dropdown-item" href="#">Wallets </a>
              <a className="dropdown-item" href="#">Jewellery </a>
              <a className="dropdown-item" href="#">Sunglasses </a>
              <a className="dropdown-item" href="#">Bags </a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Men Footwear </a>
              <a className="dropdown-item" href="#"> Sports Shoes</a>
              <a className="dropdown-item" href="#">Formal Shoes</a>
              <a className="dropdown-item" href="#">Sandals</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Ethnic Wear </a>
              <a className="dropdown-item" href="#"> Men Kurtas</a>
              <a className="dropdown-item" href="#">Ethnic Jackets</a>
              </div>

              </div>

              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Beauty & Health
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Make up</a>
                <a className="dropdown-item" href="#">Face</a>
                <a className="dropdown-item" href="#">Eyes</a>
                <a className="dropdown-item" href="#">Lips</a>
                <a className="dropdown-item" href="#">Nails</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#">Wellness </a>
              <a className="dropdown-item" href="#">Sanitizers</a>
              <a className="dropdown-item" href="#">Oral Care</a>
              <a className="dropdown-item" href="#">Feminine Hygiene </a>
              </div>

              </div>

              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Bags & Footwear  
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Women Footwear</a>
                <a className="dropdown-item" href="#">Flats</a>
                <a className="dropdown-item" href="#">Bellies</a>
                <a className="dropdown-item" href="#">juttis</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Men Footwear </a>
              <a className="dropdown-item" href="#">Sports Shoes</a>
              <a className="dropdown-item" href="#">Formal Shoes</a>
              <a className="dropdown-item" href="#">Sandals </a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Women Bags </a>
              <a className="dropdown-item" href="#">Handbag </a>
              <a className="dropdown-item" href="#">Clutches </a>
              <a className="dropdown-item" href="#">Slingbags </a>

              </div>

              </div>

              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Home & Kitchen  
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Home Furnishing</a>
                <a className="dropdown-item" href="#">Bedsheets</a>
                <a className="dropdown-item" href="#">Doormats</a>
                <a className="dropdown-item" href="#">Curtains & Sheers</a>
                <a className="dropdown-item" href="#">Mattress Protectors</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Home Decor </a>
              <a className="dropdown-item" href="#">All Home Decor</a>
              <a className="dropdown-item" href="#">Stickers</a>
              <a className="dropdown-item" href="#">Clocks </a>
              <a className="dropdown-item" href="#">Showpieces</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#">Kitchen & Dining </a>
              <a className="dropdown-item" href="#">Kitchen Storage </a>
              <a className="dropdown-item" href="#">Cookware & Bakeware </a>

              </div>
              </div>

              </div>
              
            </li>
            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Kids
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Toys & Accessories</a>
                <a className="dropdown-item" href="#">Soft Toys</a>
                <a className="dropdown-item" href="#">Footwear</a>
                <a className="dropdown-item" href="#">Stationery</a>
                <a className="dropdown-item" href="#">Watches</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#">Baby Care </a>
              <a className="dropdown-item" href="#">All Baby Care</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Infant 0-2 Years </a>
              <a className="dropdown-item" href="#">Rompers </a>
              </div>
              </div>

              </div>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>

  );
}

export default Navbar1;
