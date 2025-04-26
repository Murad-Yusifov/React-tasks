import { FaHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router";
import "./Header.scss";
import { IoMdMenu } from "react-icons/io";
import { useHeader } from "../../context/Context";
import { GrClose } from "react-icons/gr";

const Header = () => { 
  const {isOpen, closeMenu, openMenu} =useHeader()


  return (
    <>
      <div className="wrapper">
        <nav>
          <h1>Dealers</h1>
          <ul className="text display">
            <div className="collect">
            <NavLink className="link colored" to="/">Collection
            
              <div className="subMenu-wrapper">
              <ul className="subMenu">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Children</li>
                    <li>Sub menu &gt;</li>
                    </ul>  
                </div> 
            </NavLink>
            </div>
             <div className="linked" ><NavLink  className={({ isActive }) => isActive ? "link  blue " : "link "} to="/">Shop</NavLink></div>
           <div className="linked"> <NavLink className={({ isActive }) => isActive ? "link  blue" : "link "} to='/' >Catalogs</NavLink></div>
            <div className="linked"><NavLink className={({ isActive }) => isActive ? "link  blue" : "link "} to='/'>Contact</NavLink></div>
            <div className="linked"><NavLink className={({ isActive }) => isActive ? "link  blue" : "link "} to="/admin">Admin</NavLink></div>
          </ul>
          <ul className="icons-list">
            <div className="icons">
              <FaSearch />
            </div>
            <div className="icons">
              <FaHeart />
            </div>
            <div className="icons bag">
              <FaShoppingBag />
              <span>2</span>
            </div>
              <div className={`burger ${isOpen ? "hidden" : "visible1"}`} 
            onClick={openMenu}>
          <IoMdMenu  onClick={openMenu}/>
          </div>

          <div className={`slide-links ${isOpen ? "visible" : "hidden"}`} >
          <p className="close-btn" onClick={closeMenu}><GrClose/>
          </p>
          <div className="linked" ><NavLink  className={({ isActive }) => isActive ? "link  blue " : "link "} to="/">Shop</NavLink></div>
           <div className="linked"> <NavLink className={({ isActive }) => isActive ? "link  blue" : "link "} to='/' >Catalogs</NavLink></div>
            <div className="linked"><NavLink className={({ isActive }) => isActive ? "link  blue" : "link "} to='/'>Contact</NavLink></div>
            <div className="linked"><NavLink className={({ isActive }) => isActive ? "link  blue" : "link "} to="/admin">Admin</NavLink></div>

          </div>
          </ul>
        
        </nav>
      </div>
    </>
  );
};

export default Header;
