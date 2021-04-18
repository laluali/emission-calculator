import {VendorService} from "./vendor.service";
import {GeoCoordinatesModel} from "../models/geoCoordinatesModel";

export class BackendService{

    vendorService: VendorService;

    constructor() {
        this.vendorService = new VendorService();
    }

    async calculateCO2(argsMap: Map<string, string>) {
        let coordinatesMap = new Map<string, GeoCoordinatesModel>();
        coordinatesMap.set('start', await this.vendorService.getCoordinates(<string>argsMap.get('start')));
        coordinatesMap.set('end', await this.vendorService.getCoordinates(<string>argsMap.get('end')));
        console.log(coordinatesMap);
        this.vendorService.getDrivingDirections(coordinatesMap).then(
            response => {
                console.log(response.length)
            },
            reject => {
                console.log(reject);
            }
        );
    }

}
