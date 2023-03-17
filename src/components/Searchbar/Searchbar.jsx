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
    this.setState({ name: e.target.value });
    //console.log(this.state.name);
  };
  submitForm = e => {
    e.preventDefault();
    const nameSearch = {
      name: this.state.name,
    };
    this.props.onSubmit(nameSearch);
    //console.log(nameSearch);
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
            autocomplete="off"
            value={this.state.name}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarH>
    );
  }
}

export default Searchbar;
