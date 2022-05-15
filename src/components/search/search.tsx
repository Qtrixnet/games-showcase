import './search.scss';
import {FC, useCallback, useEffect, useRef, useState} from "react";

const Search: FC = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const onKeyPress = useCallback((evt: KeyboardEvent) => {
    if (evt.altKey && ['Enter'].includes(evt.code)) {
      inputRef.current?.focus();
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', onKeyPress)

    return () => {
      window.removeEventListener('keyup', onKeyPress)
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
