import { PolylineOptions } from "leaflet";

declare module "leaflet" {
  interface PolylineOptions {
    fillImage?: string | undefined;
  }
}
