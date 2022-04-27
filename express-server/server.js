const express = require('express');
const bodyParser = require('body-parser');
const { getArtistInformation, getArtistInformationById, addOrUpdateArtistInformation, deleteArtistInformation, getAlbumsByArtistId, getVideosByArtistId } = require('./dynamo.js');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('api/artistinformation', async(req, res) => {
    const artist = req.body;
    try {
        const newArtistInformation = await addOrUpdateArtistInformation(artist);
        res.json(newArtistInformation);
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: 'Error creating ArtistInformation' });
    }
});

app.put('api/artistinformation/:artistId', async(req, res) => {
    const artist = req.body;
    const artistId = Number(req.params.artistId);
    artist.artistId = artistId;
    try {
        const updatedArtistInformation = await addOrUpdateArtistInformation(artist);
        res.json(updatedArtistInformation);
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: 'Error creating ArtistInformation' });
    }
});

app.get('/artistinformation', async(req, res) => {
    try {
        const artistInformation = await getArtistInformation();
        res.json(artistInformation);
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: 'Error getting ArtistInformation' });
    }
});

app.get('/artistinformation/:artistId', async(req, res) => {
    const artistId = Number(req.params.artistId);
    try {
        const artistInformation = await getArtistInformationById(artistId);
        res.json(artistInformation);
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: 'Error getting ArtistInformation' });
    }
});

app.delete('/artistinformation/:artistId', async(req, res) => {
    const artistId = Number(req.params.artistId);
    try {
        const artistInformation = await deleteArtistInformation(artistId);
        res.json(artistInformation);
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: 'Error deleting ArtistInformation' });
    }
});

app.get('/artist/:artistId/albums', async(req, res) => {
    const artistId = Number(req.params.artistId);
    try {
        const artistAlbums = await getAlbumsByArtistId(artistId);
        res.json(artistAlbums);
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: 'Error getting Artist Albums' });
    }
});

app.get('/artist/:artistId/videos', async(req, res) => {
    const artistId = Number(req.params.artistId);
    try {
        const artistVideos = await getVideosByArtistId(artistId);
        res.json(artistVideos);
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: 'Error getting Artist Videos' });
    }
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
