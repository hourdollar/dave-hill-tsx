import React from 'react';
import { Container } from 'react-bootstrap';
import { ArtistAlbum } from '../interfaces/ArtistAlbum';

export type MusicProps = {
    album: ArtistAlbum;
};

class Music extends React.Component<MusicProps> {
    render () {
        const {album} = this.props;
        const date = new Date(album.albumReleaseDate!).toLocaleDateString();
        return (
            <Container fluid>
                <img className='w-100 p-1' src={album.albumArt} alt={album.albumTitle}></img>
                <p className='lead text-light pt-3'>{album.albumTitle}</p>
                <p className='lead text-light'>{date}</p>
            </Container>
        )
    };
}

export default Music;