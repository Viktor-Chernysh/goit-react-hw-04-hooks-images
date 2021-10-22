import { useState } from 'react';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery('');
    if (searchQuery === '') {
      alert('Please enter you request!');
      return;
    }
    onSubmit(searchQuery.toLowerCase().trim());
  };
  const handleQueryChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          onChange={handleQueryChange}
          className={s.SearchFormInput}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
