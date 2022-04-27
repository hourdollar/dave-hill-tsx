import { ArtistData } from "../interfaces/ArtistData";

export class ArtistInformationService {


    public async getArtistInformationById(artistId: number): Promise<ArtistData> {
        const response = await fetch(`/api/artistinformation/${artistId}`);
        return await response.json();
    }

}

export default ArtistInformationService;