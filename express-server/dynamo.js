const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const artistInformationTable = 'artist-information';
const artistAlbumTable = 'artist-album';
const artistImageTable = 'artist-image';
const artistVideoTable = 'artist-video';

const getArtistInformation = async() => {
    const params = {
        TableName: artistInformationTable
    };
    const artists = await dynamoClient.scan(params).promise();
    return artists.Items;
};

const addOrUpdateArtistInformation = async(artist) => {
    const params = {
        TableName: artistInformationTable,
        Item: artist
    }
    await dynamoClient.put(params).promise();
};

const getArtistInformationById = async(artistId) => {
    const params = {
        TableName: artistInformationTable,
        Key: {
            "artistId": artistId
        }
    }
    const artist = await dynamoClient.get(params).promise();
    return artist.Item;
};

const deleteArtistInformation = async(artistId) => {
    const params = {
        TableName: artistInformationTable,
        Key: {
            "artistId": artistId
        }
    }
    await dynamoClient.delete(params).promise();
};

const getAlbums = async() => {
    const params = {
        TableName: artistAlbumTable
    };
    const albums = await dynamoClient.scan(params).promise();
    return albums.Items;
};

const addOrUpdateAlbum = async(album) => {
    const params = {
        TableName: artistAlbumTable,
        Item: album
    }
    await dynamoClient.put(params).promise();
};

const getAlbumByAlbumId = async(albumId) => {
    const params = {
        TableName: artistAlbumTable,
        KeyConditionExpression: '#albumId = :albumId',
        ExpressionAttributeNames: {
            '#albumId': 'albumId'
        },
        ExpressionAttributeValues: {
            ':albumId': albumId
        }
    }
    const album = await dynamoClient.query(params).promise();
    return album.Item;
};

const getAlbumsByArtistId = async(artistId) => {
    const params = {
        TableName: artistAlbumTable,
        FilterExpression: '#artistId = :artistId',
        ExpressionAttributeNames: {
            '#artistId': 'artistId'
        },
        ExpressionAttributeValues: {
            ':artistId': artistId
        }
    }
    const albums = await dynamoClient.scan(params).promise();
    return albums.Items;
};

const deleteAlbum = async(albumId) => {
    const params = {
        TableName: artistAlbumTable,
        Key: {
            "albumId": albumId
        }
    }
    return await dynamoClient.delete(params).promise();
};

const getImages = async() => {
    const params = {
        TableName: artistImageTable
    };
    const images = await dynamoClient.scan(params).promise();
    return images.Items;
};

const addOrUpdateImage = async(image) => {
    const params = {
        TableName: artistImageTable,
        Item: image
    }
    await dynamoClient.put(params).promise();
};

const getImagesByArtistId = async(artistId) => {
    const params = {
        TableName: artistImageTable,
        FilterExpression: '#artistId = :artistId',
        ExpressionAttributeNames: {
            '#artistId': 'artistId'
        },
        ExpressionAttributeValues: {
            ':artistId': artistId
        }
    }
    const albums = await dynamoClient.scan(params).promise();
    return albums.Items;
};

const deleteImage = async(imageUrl) => {
    const params = {
        TableName: artistImageTable,
        Key: {
            "imageUrl": imageUrl
        }
    }
    return await dynamoClient.delete(params).promise();
};

const getVideos = async() => {
    const params = {
        TableName: artistVideoTable
    };
    const videos = await dynamoClient.scan(params).promise();
    return videos.Items;
};

const addOrUpdateVideo = async(video) => {
    const params = {
        TableName: artistVideoTable,
        Item: video
    }
    await dynamoClient.put(params).promise();
};

const getVideosByArtistId = async(artistId) => {
    const params = {
        TableName: artistVideoTable,
        FilterExpression: '#artistId = :artistId',
        ExpressionAttributeNames: {
            '#artistId': 'artistId'
        },
        ExpressionAttributeValues: {
            ':artistId': artistId
        }
    }
    const videos = await dynamoClient.scan(params).promise();
    return videos.Items;
};

const deleteVideo = async(videoId) => {
    const params = {
        TableName: artistVideoTable,
        Key: {
            "videoId": videoId
        }
    }
    return await dynamoClient.delete(params).promise();
};

module.exports = {
    dynamoClient,
    // Artist Information
    getArtistInformation,
    getArtistInformationById,
    addOrUpdateArtistInformation,
    deleteArtistInformation,
    // Albums
    getAlbums,
    getAlbumByAlbumId,
    getAlbumsByArtistId,
    addOrUpdateAlbum,
    deleteAlbum,
    // Images
    getImages,
    getImagesByArtistId,
    addOrUpdateImage,
    deleteImage,
    // Videos
    getVideos,
    getVideosByArtistId,
    addOrUpdateVideo,
    deleteVideo
}