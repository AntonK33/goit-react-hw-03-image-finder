import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { AppWrapper } from './App.Styled';

class App extends Component {
  state = {
    name: '',
  };
  newSearch = nameSearch => {
    this.setState({ name: nameSearch.name });
  };

  render() {
    const { hits, name } = this.state;
    return (
      <AppWrapper>
        {<Searchbar onSubmit={this.newSearch} />}
        {<ImageGallery articles={hits} inputName={name} />}
      </AppWrapper>
    );
  }
}

export default App;
