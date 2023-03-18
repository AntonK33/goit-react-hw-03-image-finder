import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, ItemImage } from './ImageGalleryItem.Styled';

class ImageGalleryItem extends Component {
  state = {
    modalShow: false,
  };
  toggleModal = () => {
    this.setState(state => ({
      modalShow: !state.modalShow,
    }));
  };
  render() {
    const { articles } = this.props;
    return (
      <GalleryItem onClick={this.toggleModal}>
        <ItemImage src={articles.webformatURL} alt="" />
        {this.state.modalShow && (
          <Modal articles={articles} onClose={this.toggleModal} id={this.key} />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  articles: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};
