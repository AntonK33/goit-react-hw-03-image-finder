import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarH,
} from './Searchbar.Styled';

class Searchbar extends Component {
  state = {
    name: '',
  };

  searchName = e => {
    this.setState({ name: e.target.value.toLowerCase() });
  };

  submitForm = e => {
    e.preventDefault();
    const nameSearch = {
      name: this.state.name,
    };
    this.props.onSubmit(nameSearch);
    this.restart();
  };

  restart = () => {
    setTimeout(() => {
      this.setState({ name: '' });
    }, 500);
  };
  render() {
    return (
      <SearchbarH>
        <SearchForm onSubmit={this.submitForm}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.searchName}
            type="text"
            name="input"
            autocomplete="off"
            value={this.state.name}
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarH>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
