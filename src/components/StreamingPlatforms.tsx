import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PlatformArtist } from '../interfaces/PlatformArtist';

export type StreamingPlatformProps = {
    platformArtist: PlatformArtist;
}


class StreamingPlatforms extends React.Component<StreamingPlatformProps> {
    render() {
        const {platformArtist} = this.props;
        return (
            <a className='align-middle' href={platformArtist.platformUrl}>
                <img className='img-fluid w-25 p-1' src={platformArtist.platformIcon}></img>
            </a>
        )
    }
}

export default StreamingPlatforms;