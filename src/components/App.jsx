import { Component } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import { AppWrapper } from './App.Styled';

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    name: '',
    error: null,
  };
  newSearch = nameSearch => {
    this.setState({ name: nameSearch.name });
    console.log(nameSearch);
  };
  async componentDidUpdate(prevProps, prevState) {
    this.setState({ isLoading: true });
    const API_KEY = '32831732-fbbeddb34dab056c70c27a61e';
    if (this.state.name !== prevState.name) {
      console.log(prevState.name);
      console.log(this.state.name);
      console.log(prevProps);
      console.log(this.props);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${this.state.name}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({
          articles: response.data.hits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <AppWrapper>
        {<Searchbar onSubmit={this.newSearch} />}
        {this.state.isLoading && <p>Loading...</p>}
        {<ImageGallery articles={this.state.articles} />}
        {<Button />}
      </AppWrapper>
    );
  }
}
//
export default App;
