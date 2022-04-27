import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtistInformation from './components/ArtistInformation';
import { Col, Container, Row } from 'react-bootstrap';
import Music from './components/Music';
import MusicVideos from './components/MusicVideos';
import { ArtistAlbum } from './interfaces/ArtistAlbum';
import { ArtistVideo } from './interfaces/ArtistVideo';


function App() {
  const [artistAlbums, setArtistAlbums] = useState<ArtistAlbum[]>([])
  const [artistVideos, setArtistVideos] = useState<ArtistVideo[]>([])

  const getArtistAlbums = async () => {
      let response = await fetch('artist/0/albums');
      let artistAlbums = response.json();
      setArtistAlbums(await artistAlbums);
  }

  const getArtistVideos = async () => {
    let response = await fetch('artist/0/videos');
    let artistVideos = response.json();
    setArtistVideos(await artistVideos);
  }

  useEffect(() => { getArtistAlbums(); }, [])
  useEffect(() => { getArtistVideos(); }, [])

  const albums = artistAlbums.filter(a => a.isActive === true).sort((a, b) => a.albumReleaseDate! < b.albumReleaseDate! ? 1 : -1).slice(0,3);
  const videos = artistVideos.filter(v => v.isActive === true).sort((a, b) => a.publicationDate! < b.publicationDate! ? 1 : -1).slice(0,3);

  return (
    <Container fluid className="App" style={{
      backgroundImage: `url('https://dave-hill-s3-images.s3.amazonaws.com/dave-hill-imgs/img_8451.JPG')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <ArtistInformation />
      <br></br>
      <h1 className='text-light'>MUSIC</h1>
      <Container className='p-3'>
        <Row>
          {albums.map(a => (
            <Col key={a.albumId}>
              <Music album={a}/>
            </Col>
            ))}
          </Row>
      </Container>
      <br></br>
      <h1 className='text-light'>VIDEOS</h1>
      <Container className='p-3'>
        <Row>
        {videos.map(v => (
          <Col key={v.videoId}> 
          <MusicVideos artistVideo={v} /> 
          </Col>
        ))}
        </Row>
      </Container>
    </Container>
  );
}

export default App;
