export class GeoCoordinatesModel implements GeoCoordinates{
    coordinates: number[];

    constructor(coordinates: number[]) {
        this.coordinates = coordinates;
    }
}
