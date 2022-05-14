import './header.scss';
import Search from "../search/search";

const Header = () => {
  return (
    <header className="header">
      <a
        className="header__logo"
        href="#"
      >
        Rawg
      </a>
      <Search/>
    </header>
  );
};

export default Header;
