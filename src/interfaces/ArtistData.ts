import { PlatformArtist } from "./PlatformArtist";

export interface ArtistData {
    artistId: number;
    artistName: string;
    artistRoute?: string;
    twitterUrl?: string;
    instagramUrl?: string;
    facebookUrl?: string;
    artistBio?: string;
    calendarUrl?: string;
    isActive: boolean;
    artistMusic?: PlatformArtist[];
}