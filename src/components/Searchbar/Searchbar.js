import { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ searchQuery: '' });
    if (this.state.searchQuery === '') {
      alert('Please enter you request!');
      return;
    }
    this.props.onSubmit(this.state.searchQuery.toLowerCase().trim());
  };
  handleQueryChange = e => {
    this.setState({ searchQuery: e.target.value });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.handleQueryChange}
            className={s.SearchFormInput}
            value={this.state.searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
