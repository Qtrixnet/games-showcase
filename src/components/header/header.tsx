import './header.scss';
import Search from "../search/search";
import {FC} from "react";
import {Link} from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="header">
      <Link
        className="header__logo"
        to="/"
      >
        Rawg
      </Link>
      <Search/>
    </header>
  );
};

export default Header;
