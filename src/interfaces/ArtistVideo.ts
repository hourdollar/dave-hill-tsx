import { Platform } from "../enum/Platform";

export interface ArtistVideo {
    platform: Platform;
    videoUrl: string;
    isActive: boolean;
    videoId: string;
    description: string;
    title: string
    channelTitle: string;
    publicationDate: string;
}