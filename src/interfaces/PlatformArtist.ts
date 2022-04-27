import { IpcNetConnectOpts } from "net";
import { Platform } from "../enum/Platform";

export interface PlatformArtist {
    platform: Platform;
    platformIcon: string;
    platformUrl: string;
    isActive: boolean;
}