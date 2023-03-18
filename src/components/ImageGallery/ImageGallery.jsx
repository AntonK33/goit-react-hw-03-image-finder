import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryItemList, Notification } from './ImageGallery.Styled';
import fetchRequest from 'components/Api/API_request';
import Button from 'components/Button/Button';
import Loader from '../Loader/Loader';
class ImageGallery extends Component {
  state = {
    hits: null,
    error: null,
    total: 0,
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputName !== this.props.inputName) {
      this.setState({ status: 'pending', page: 1 });

      fetchRequest(this.props.inputName, this.state.page)
        .then(response => {
          if (response.hits.length === 0) {
            this.setState({ status: 'rejected' });
            return;
          }
          this.setState({
            hits: [...response.hits],
            total: response.total,
            status: 'resolved',
          });
        })

        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  loadMorePage = () => {
    const newPage = this.state.page + 1;
    this.setState(prevPage => ({
      page: newPage,
    }));
    fetchRequest(this.props.inputName, newPage)
      .then(response =>
        this.setState({
          hits: [...this.state.hits, ...response.hits],
          total: response.total,
          status: 'resolved',
        })
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    if (this.state.status === 'idle') {
      return <Notification>Please, type something to the search</Notification>;
    }

    if (this.state.status === 'pending') {
      return <Loader />;
    }

    if (this.state.status === 'rejected') {
      return <Notification>Oopps...no images with this name</Notification>;
    }
    if (this.state.status === 'resolved') {
      return (
        <div>
          <GalleryItemList>
            {this.state.hits.map(articles => (
              <ImageGalleryItem key={articles.id} articles={articles} />
            ))}
          </GalleryItemList>
          {this.state.total > this.state.hits.length && (
            <Button onClick={this.loadMorePage} />
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  inputName: PropTypes.string.isRequired,
  articles: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
