import { StatusPipe } from './status.pipe';

let pipe: StatusPipe;

const statsMap = {
    "100": "Continue",
    "101": "Switching Protocols",
    "102": "Processing",
    "200": "OK",
    "201": "Created",
    "202": "Accepted",
    "203": "Non-authoritative Information",
    "204": "No Content",
    "205": "Reset Content",
    "206": "Partial Content",
    "207": "Multi-Status",
    "208": "Already Reported",
    "226": "IM Used",
    "300": "Multiple Choices",
    "301": "Moved Permanently",
    "302": "Found",
    "303": "See Other",
    "304": "Not Modified",
    "305": "Use Proxy",
    "307": "Temporary Redirect",
    "308": "Permanent Redirect",
    "400": "Bad Request",
    "401": "Unauthorized",
    "402": "Payment Required",
    "403": "Forbidden",
    "404": "Not Found",
    "405": "Method Not Allowed",
    "406": "Not Acceptable",
    "407": "Proxy Authentication Required",
    "408": "Request Timeout",
    "409": "Conflict",
    "410": "Gone",
    "411": "Length Required",
    "412": "Precondition Failed",
    "413": "Payload Too Large",
    "414": "Request-URI Too Long",
    "415": "Unsupported Media Type",
    "416": "Requested Range Not Satisfiable",
    "417": "Expectation Failed",
    "418": "I'm a teapot",
    "421": "Misdirected Request",
    "422": "Unprocessable Entity",
    "423": "Locked",
    "424": "Failed Dependency",
    "426": "Upgrade Required",
    "428": "Precondition Required",
    "429": "Too Many Requests",
    "431": "Request Header Fields Too Large",
    "444": "Connection Closed Without Response",
    "451": "Unavailable For Legal Reasons",
    "499": "Client Closed Request",
    "500": "Internal Server Error",
    "501": "Not Implemented",
    "502": "Bad Gateway",
    "503": "Service Unavailable",
    "504": "Gateway Timeout",
    "505": "HTTP Version Not Supported",
    "506": "Variant Also Negotiates",
    "507": "Insufficient Storage",
    "508": "Loop Detected",
    "510": "Not Extended",
    "511": "Network Authentication Required",
    "599": "Network Connect Timeout Error"
};

describe('StatusPipe', () => {
    beforeEach(() => {
        pipe = new StatusPipe();
    });
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    describe('toInt', () => {
        it('should return an int when passed an int of type number', () => {
            const num: number = 20;
            expect(pipe['toInt'](num)).toEqual(num);
        });
        it('should return an int when passed an int of type string', () => {
            const num: number = 20;
            const str: string = `${num}`;
            expect(pipe['toInt'](str)).toEqual(num);
        });
        it('should return NaN if passed a float of type number', () => {
            const num: number = 20.1;
            const str: string = `${num}`;
            expect(()=>pipe['toInt'](str)).toThrow();
        });
        it('should return NaN if passed a float of type string', () => {
            const num: number = 20.1;
            const str: string = `${num}`;
            expect(()=>pipe['toInt'](str)).toThrow();
        });
        it('should return NaN if passed a string that is not a number', () => {
            const str: string = "Hello";
            expect(()=>pipe["toInt"](str)).toThrow();
        });
        it('should return NaN if passed an object', () => {
            const obj: any = {};
            expect(()=>pipe["toInt"](obj)).toThrow();
        });
        it('should return NaN if passed an object', () => {
            const obj: any = {};
            expect(()=>pipe["toInt"](obj)).toThrow();
        });
        it('should return NaN if passed an array', () => {
            const arr: any = [];
            expect(()=>pipe["toInt"](arr)).toThrow();
        });
        it('should return NaN if passed a null', () => {
            expect(()=>pipe["toInt"](null)).toThrow();
        });
        it('should return NaN if passed an undefined', () => {
            expect(()=>pipe["toInt"](undefined)).toThrow();
        });
        it('should return NaN if passed a NaN', () => {
            expect(()=>pipe["toInt"](NaN)).toThrow();
        });
    });
    describe('onError',()=>{
        it('should throw an error',()=>{
            const msg: string = "Some Error Message";
            expect(()=>pipe['onError'](msg)).toThrowError(msg);
        });
        it('should be overridable',(done)=>{
            const msg: string = "Some Error Message";
            class NoErrorPipe extends StatusPipe {
                public onError(arg: string): void {
                    expect(arg).toEqual(msg);
                    done();
                }
            }
            pipe = new NoErrorPipe();
            pipe['onError'](msg)
        });
    });
    describe('getStatusCodeText', () => {

        Object.keys(statsMap).forEach((key)=>{
            it(`should return text "${statsMap[key]}" for code ${key}`,()=>{
                const num: number = pipe["toInt"](key);
                const expected: string = statsMap[key];
                expect(pipe["getStatusCodeText"](num)).toEqual(expected);
            });
        });

        it(`should throw an error if passed an unknown status code`,()=>{
            expect(()=>pipe["getStatusCodeText"](10000)).toThrow();
        });

    });

    describe('transform', () => {

        Object.keys(statsMap).forEach((key)=>{
            it(`should return text "${statsMap[key]}" for code ${key}`,()=>{
                const num: number = pipe["toInt"](key);
                const expected: string = statsMap[key];
                expect(pipe["transform"](num)).toEqual(expected);
            });
        });

        Object.keys(statsMap).forEach((key)=>{
            it(`should return text "${statsMap[key]}" for code "${key}"`,()=>{
                const expected: string = statsMap[key];
                expect(pipe["transform"](key)).toEqual(expected);
            });
        });

    });

});
