import * as https from "https";
import * as url from "url";
import {URLSearchParams} from "url";
import {AppConstant} from "../const/appConstant";
import {ReqOptionsModel} from "../models/reqOptions.model";
import {request} from "https";
import {GeoCoordinatesModel} from "../models/geoCoordinatesModel";


export class HttpService{

    constructor() {

    }

    private formSearchParams(paramsMap: Map<string, string|GeoCoordinatesModel>){
        const params = new URLSearchParams();
        paramsMap.forEach(
            (val, key) => {
                if (typeof val === "string") {
                    params.append(key, val);
                } else {
                    params.append(key, val.coordinates.toString());
                }
            }
        )
        return params;
    }

    private formRequest(options: ReqOptionsModel, searchParams?: Map<string, string>) : Object{
        if(searchParams){
            searchParams.set('api_key', AppConstant.apiKey);
            options.url.search = this.formSearchParams(searchParams).toString();
        }
        console.log(options);
        return options.url.href;
    }

    get(options: ReqOptionsModel, searchParams?: Map<string, any>) : Promise<any> {
        return new Promise<any>((resolve, reject)=>{
            let reqOptions = this.formRequest(options, searchParams);
            const req = https.request(reqOptions, (res) => {
                console.log('statusCode:', res.statusCode);

                res.on('data', (d) => {
                    process.stdout.write(d);
                    console.log(JSON.parse(d));
                    return resolve(JSON.parse(d));
                });
            });
            req.on('error', (e) => {
                console.log('error')
                console.log(e);
                return reject(e);
            });
            req.end();
        });

    }

}
