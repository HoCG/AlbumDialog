import React from 'react';
import styled from 'styled-components';
import AlbumBox from './AlbumBox';

const AlbumDialog: React.FC = () => {

  return (
    <DialogBackground>
      <AlbumDialogContainer>
        <SelectedAlbum></SelectedAlbum>
        <AlbumViewer>
          <AlbumBox></AlbumBox>
        </AlbumViewer>
      </AlbumDialogContainer>
    </DialogBackground>
  );
};
const Centering = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const SelectedAlbum = styled.div`
width: 90%;
height: 20%;
background-color: #a9e6d7;
border-radius: 20px;
box-shadow: 0 8px 8px 0 gray;
`;

const AlbumDialogContainer = styled(Centering)`
flex-direction: column;
width: 84vw;
height: 80vh;
border-radius: 25px;
background-color: white;
box-shadow: 0 8px 8px 0 gray;
`;
const AlbumViewer = styled.div`
display: flex;
overflow-y: scroll;
width: 98%;
height: 60%;
`;

const DialogBackground = styled(Centering)`
position: absolute;
background-color: rgba(0, 0, 0, 0.4);
width: 100vw;
height: 100vh;
top: 0;
left: 0;
`;

export default AlbumDialog;