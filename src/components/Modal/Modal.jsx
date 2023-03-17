import { Component } from 'react';
import { Overlay, ModalStyle } from './Modal.Styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = e => {
    if (e.currentTarget !== e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdrop}>
        <ModalStyle>
          <img
            src={this.props.articles.largeImageURL}
            alt={this.props.articles.tags}
          />
        </ModalStyle>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
