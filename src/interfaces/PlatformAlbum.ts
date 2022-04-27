import { Platform } from "../enum/Platform";

export interface PlatformAlbum {
    platform: Platform;
    albumDirectUrl: string;
    isActive: boolean;
}