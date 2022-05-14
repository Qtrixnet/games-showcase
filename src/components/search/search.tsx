import './search.scss';
import {useCallback, useEffect, useRef, useState} from "react";

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  // @ts-ignore
  const onKeyPress = useCallback((evt) => {
    if (evt.altKey && ['Enter'].includes(evt.code)) {
      // @ts-ignore
      inputRef?.current?.focus();
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeyPress)

    return () => {
      window.removeEventListener('keydown', onKeyPress)
    }
  }, [onKeyPress])

  return (
    <form className="search">
      <input
        ref={inputRef}
        className="search__input"
        placeholder="Search games"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={`search__hint ${!isFocus && 'search__hint--visible'}`}>
        <span className="search__hotkey">Alt</span>
        <span className="search__hint-symbol">+</span>
        <span className="search__hotkey">Enter</span>
      </div>
    </form>
  );
};

export default Search;
