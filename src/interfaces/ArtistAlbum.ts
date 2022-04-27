import { PlatformAlbum } from "./PlatformAlbum";

export interface ArtistAlbum {
    albumId: number;
    albumEmbedUrl?: URL;
    albumArt?: string;
    albumReleaseDate?: string;
    albumTitle?: string;
    albumDirectUrls?: PlatformAlbum[];
    isActive: boolean;
}