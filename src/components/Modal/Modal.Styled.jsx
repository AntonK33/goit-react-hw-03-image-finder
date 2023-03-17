import styled from 'styled-components';

export const Overlay = styled.div`
   {
    // position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    raight: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 990;
  }
`;
export const ModalStyle = styled.div`
   {
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 350px;
    max-width: 600px;
    width: 100%;
    background: grey;
  }
`;
