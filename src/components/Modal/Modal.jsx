import { Component } from 'react';
import { Overlay, ModalStyle } from './Modal.Styled';
import * as basicLightbox from 'basiclightbox';
class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalStyle class="modal">
          <img src="" alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}

export default Modal;
