import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap/';
import { Platform } from '../enum/Platform';
import { ArtistData } from '../interfaces/ArtistData';
import Navigation from './Navbar';
import SocialMedia from './SocialMedia';
import StreamingPlatforms from './StreamingPlatforms';

interface ArtistInformationProps { };

const ArtistInformation: React.FC<ArtistInformationProps> = () => {
    const [artistData, setArtistData] = useState<ArtistData>({
        artistId: 0,
        artistName: '',
        artistRoute: '',
        twitterUrl: '',
        instagramUrl: '',
        facebookUrl: '',
        artistBio: '',
        calendarUrl: '',
        isActive: false,
        artistMusic: [],
    });

    const getArtistData = async () => {
        let response = await fetch('artistinformation/0');
        let artistData = response.json();
        setArtistData(await artistData);
    }

    useEffect(() => { getArtistData(); }, [])

        if (artistData && artistData.artistMusic && artistData?.artistMusic?.length > 0) {
            let appleMusic = artistData.artistMusic.find( music => music.platform === Platform.AppleMusic);
            let spotify = artistData.artistMusic.find( music => music.platform === Platform.Spotify);
            let youtube = artistData.artistMusic.find( music => music.platform === Platform.Youtube);
            return (
                <Container fluid>
                    <Navigation />
                        <Container>
                            <img className='img-fluid p-2 w-100' src='https://dave-hill-s3-images.s3.amazonaws.com/drive-download-20220415T195556Z-001/DaveHill1.png' alt={artistData.artistName}></img>
                            <br></br>
                            <Container className='p-4'>
                                <p className='text-light font-weight-bold text-justify' >{artistData.artistBio}</p>
                            </Container>
                        </Container>
                        <Container>
                        <Row className='p-3'>
                            <Col>
                                <SocialMedia 
                                icon='https://hour-dollar-logos-brands.s3.amazonaws.com/Twitter+social+icons+-+circle+-+blue.png'
                                url={artistData.twitterUrl!} 
                                alt='Twitter'/>
                            </Col>
                            <Col>
                                <SocialMedia 
                                icon='../assets/logos/Instagram_Glyph_Gradient_RGB.png' 
                                url={artistData.instagramUrl!} 
                                alt='Instagram'/>  
                            </Col>
                            <Col>
                                <SocialMedia 
                                icon='../assets/logos/f_logo_RGB-Blue_250.png' 
                                url={artistData.facebookUrl!} 
                                alt='Facebook' />
                            </Col>
                        </Row>
                        <Row className='p-3'>
                            <Col>
                                <StreamingPlatforms 
                                platformArtist={appleMusic!} />
                            </Col>
                            <Col>
                                <StreamingPlatforms 
                                platformArtist={spotify!} />
                            </Col>
                            <Col className='mt-3'>
                                <StreamingPlatforms
                                platformArtist={youtube!} />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            )
        }

        return null;
        
}

export default ArtistInformation;