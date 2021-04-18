import {AppConstant} from "../const/appConstant";
import {URLSearchParams} from "url";
import {ReqOptionsModel} from "../models/reqOptions.model";
import {HttpService} from "./http.service";
import {GeoCoordinatesModel} from "../models/geoCoordinatesModel";


export class VendorService{

    httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    getGeoCodeAPI(){
        return new ReqOptionsModel(AppConstant.vendorProtocol, AppConstant.vendorHost, 'GET', AppConstant.geoCodeSearch, AppConstant.vendorPort);
    }

    getDrivingDirectionsAPI(){
        return new ReqOptionsModel(AppConstant.vendorProtocol, AppConstant.vendorHost, 'GET', AppConstant.getDirections, AppConstant.vendorPort);
    }

    getCoordinates(location: string) : Promise<GeoCoordinatesModel> {
        let params = new Map<string, string>();
        params.set('text', location);
        params.set('layers', 'locality');
        params.set('boundary.country', 'DE');
        return new Promise((resolve, reject) => {
            this.httpService.get(this.getGeoCodeAPI(), params).then(
                res => {
                    return resolve(new GeoCoordinatesModel(res.features[0].geometry.coordinates));
                },
                rej => {
                    return reject(rej);
                }
            );
        })
    }

    getDrivingDirections(coordinateMap: Map<string, GeoCoordinatesModel>):Promise<GeoCoordinates[]> {
        let coordinates: GeoCoordinates[] = [];
        return new Promise((resolve, reject) => {
            this.httpService.get(this.getDrivingDirectionsAPI(), coordinateMap).then(
                res => {
                    res.features[0].geometry.coordinates.forEach(
                        (coordinate: number[]) => {
                            coordinates.push(new GeoCoordinatesModel(coordinate))
                        }
                    )
                    return resolve(coordinates);
                },
                rej => { return reject(rej)}
            )
        });
    }
}
