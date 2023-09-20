import React, { useContext, useEffect, useRef , useState} from "react";
import "./Header.css";
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import { ImUser } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import SearchForm from './SearchForm';
import ParentComponent from './ParentComponent';

function Header() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeParentComponent, setActiveParentComponent] = useState(false);
  // Get location for hide & show SearchBar Component
  const location = useLocation();
  const { pathname } = location;

  // run only if state changes and Not Mount
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setTimeout(() => {
        dispath({ type: "REMOVE_CLASS" });
      }, 1000);
    } else {
      didMount.current = true;
    }
  }, [dispath, state.favorites]);
  window.onscroll = () => {
    setActiveSearch(false);
    setActiveParentComponent(false);
  };
  const handleSearchButton = () => {
    setActiveSearch(!activeSearch);
    setActiveParentComponent(false);
  };
  const handleParentComponentButton = () => {
    setActiveParentComponent(!activeParentComponent);
    setActiveSearch(false);
  };

  return (
    <header className="header" dir="ltr">
      <nav className="nav">
        <Link to={"/"} className="logo">
        <img
            src="image/logo-food.png"
            alt=""
            width="80px"
          />
        </Link>
        <div className="icon_Sopping_box">
        <button  className="shoppe_icon_box" onClick={handleSearchButton}>
          {pathname === "/Products" && 
            <BsSearch className="shop_icon icons" />
          }
        </button>  
          <Link to={"/basket"} className="shoppe_icon_box">
            <AiOutlineShopping className="shop_icon" />
            {state.basket.length > 0 && (
              <span className="badge_shope">{state.basket.length}</span>
            )}
          </Link>
          <Link
            to={"/favorite"}
            className={`mark_icon_box ${state.isFavorite ? "tada" : ""}`}
          >
            <BsFillBookmarkHeartFill className="mark_icon icons" />
            {state.favorites.length > 0 && (
              <span className="badge_mark">{state.favorites.length}</span>
            )}
          </Link>
          <button  className="shoppe_icon_box" onClick={handleParentComponentButton}>
            <ImUser className="shop_icon icons" />
          </button>                   
        </div>
      </nav>
      <SearchForm active={activeSearch} />
      <ParentComponent active={activeParentComponent} />
    </header>
  );
}

export default Header;
