import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryItemList } from './ImageGallery.Styled';

class ImageGallery extends Component {
  state = {
    hits: null,
    error: null,
    total: 0,
    page: 1,
    status: 'idle',
  };

  render() {
    const { articles } = this.props;
    return (
      <GalleryItemList>
        {articles.map(articles => (
          <ImageGalleryItem key={articles.id} articles={articles} />
        ))}
      </GalleryItemList>
    );
  }
}

export default ImageGallery;
