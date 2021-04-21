export class ReqOptionsModel implements OptionsInterface{
    url: URL;
    method: string;
    headers: any;

    constructor(protocol: string, hostname: string, method: string, path: string, port: number, headers?: any) {
        this.url = new URL(protocol.concat(hostname).concat(path));
        this.url.port = String(port);
        this.method = method;
        this.headers = headers;
    }





}
