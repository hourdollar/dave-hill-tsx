import React from 'react';
import { Container } from 'react-bootstrap';
import { ArtistVideo } from '../interfaces/ArtistVideo';

export type MusicVideoProps = {
    artistVideo: ArtistVideo;
}

class MusicVideos extends React.Component<MusicVideoProps> {
    render () {
        const { artistVideo } = this.props;
        const publicationDate = new Date(artistVideo.publicationDate!).toLocaleDateString();
        return (
            <Container fluid>
                <iframe
                    src={`https://www.youtube.com/embed/${artistVideo.videoId}`}
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title="video"
                    height={300}
                    width = {400}
                />
                <p className='text-light'>{artistVideo.title}</p>
                <p className='text-light'>{publicationDate}</p>
            </Container>
        )
    }
}

export default MusicVideos;