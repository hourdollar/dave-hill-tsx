import React from 'react';

export type SocialMediaProps = {
    url: string;
    icon: string;
    alt: string;
}

class SocialMedia extends React.Component<SocialMediaProps> {
    render() {
        const {url, icon, alt} = this.props;
        return (
            <a href={url}>
                <img className='img-fluid w-25 p-1' src={icon} alt={alt}></img>
            </a>
        )
    }
}

export default SocialMedia;