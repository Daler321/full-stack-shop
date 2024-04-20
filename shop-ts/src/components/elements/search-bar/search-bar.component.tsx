import React, {
  ChangeEvent,
  useState,
  KeyboardEvent,
  useEffect,
  useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../../assets/svg/magnifying-glass-solid.svg';
import { ReactComponent as Close } from '../../../assets/svg/xmark-solid.svg';

import { SearchInInput, SearchInput } from './search-bar.styles';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, setField] = useState('');
  const nav = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isOpen && inputRef.current?.focus();
  }, [isOpen]);

  const toggleSearch = () => setIsOpen(!isOpen);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    HTMLInputElement && setField(e.target.value);

  const searchHandler = () => {
    setIsOpen(false);
    setField('');
    nav(`/search/${field}/1`);
  };

  const searchOnEnter = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' && searchHandler();

  return (
    <>
      {!isOpen ? (
        <>
          <SearchIcon className='icon' onClick={toggleSearch} />
        </>
      ) : (
        <>
          <SearchInput
            value={field}
            onChange={(e) => changeHandler(e)}
            onKeyDown={(e) => searchOnEnter(e)}
            ref={inputRef}
          />
          <SearchInInput onClick={searchHandler} />
          <Close className='icon' onClick={toggleSearch} />
        </>
      )}
    </>
  );
};

export default SearchBar;
