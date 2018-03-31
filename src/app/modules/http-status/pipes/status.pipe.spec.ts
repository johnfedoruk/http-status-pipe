import { StatusPipe } from './status.pipe';

let pipe: StatusPipe;

const statsMap = {
    "100": {text:"Continue",type:"Informational"},
    "101": {text:"Switching Protocols",type:"Informational"},
    "102": {text:"Processing",type:"Informational"},
    "200": {text:"OK",type:"Success"},
    "201": {text:"Created",type:"Success"},
    "202": {text:"Accepted",type:"Success"},
    "203": {text:"Non-authoritative Information",type:"Success"},
    "204": {text:"No Content",type:"Success"},
    "205": {text:"Reset Content",type:"Success"},
    "206": {text:"Partial Content",type:"Success"},
    "207": {text:"Multi-Status",type:"Success"},
    "208": {text:"Already Reported",type:"Success"},
    "226": {text:"IM Used",type:"Success"},
    "300": {text:"Multiple Choices",type:"Redirection"},
    "301": {text:"Moved Permanently",type:"Redirection"},
    "302": {text:"Found",type:"Redirection"},
    "303": {text:"See Other",type:"Redirection"},
    "304": {text:"Not Modified",type:"Redirection"},
    "305": {text:"Use Proxy",type:"Redirection"},
    "307": {text:"Temporary Redirect",type:"Redirection"},
    "308": {text:"Permanent Redirect",type:"Redirection"},
    "400": {text:"Bad Request",type:"Client Error"},
    "401": {text:"Unauthorized",type:"Client Error"},
    "402": {text:"Payment Required",type:"Client Error"},
    "403": {text:"Forbidden",type:"Client Error"},
    "404": {text:"Not Found",type:"Client Error"},
    "405": {text:"Method Not Allowed",type:"Client Error"},
    "406": {text:"Not Acceptable",type:"Client Error"},
    "407": {text:"Proxy Authentication Required",type:"Client Error"},
    "408": {text:"Request Timeout",type:"Client Error"},
    "409": {text:"Conflict",type:"Client Error"},
    "410": {text:"Gone",type:"Client Error"},
    "411": {text:"Length Required",type:"Client Error"},
    "412": {text:"Precondition Failed",type:"Client Error"},
    "413": {text:"Payload Too Large",type:"Client Error"},
    "414": {text:"Request-URI Too Long",type:"Client Error"},
    "415": {text:"Unsupported Media Type",type:"Client Error"},
    "416": {text:"Requested Range Not Satisfiable",type:"Client Error"},
    "417": {text:"Expectation Failed",type:"Client Error"},
    "418": {text:"I'm a teapot",type:"Client Error"},
    "421": {text:"Misdirected Request",type:"Client Error"},
    "422": {text:"Unprocessable Entity",type:"Client Error"},
    "423": {text:"Locked",type:"Client Error"},
    "424": {text:"Failed Dependency",type:"Client Error"},
    "426": {text:"Upgrade Required",type:"Client Error"},
    "428": {text:"Precondition Required",type:"Client Error"},
    "429": {text:"Too Many Requests",type:"Client Error"},
    "431": {text:"Request Header Fields Too Large",type:"Client Error"},
    "444": {text:"Connection Closed Without Response",type:"Client Error"},
    "451": {text:"Unavailable For Legal Reasons",type:"Client Error"},
    "499": {text:"Client Closed Request",type:"Client Error"},
    "500": {text:"Internal Server Error",type:"Server Error"},
    "501": {text:"Not Implemented",type:"Server Error"},
    "502": {text:"Bad Gateway",type:"Server Error"},
    "503": {text:"Service Unavailable",type:"Server Error"},
    "504": {text:"Gateway Timeout",type:"Server Error"},
    "505": {text:"HTTP Version Not Supported",type:"Server Error"},
    "506": {text:"Variant Also Negotiates",type:"Server Error"},
    "507": {text:"Insufficient Storage",type:"Server Error"},
    "508": {text:"Loop Detected",type:"Server Error"},
    "510": {text:"Not Extended",type:"Server Error"},
    "511": {text:"Network Authentication Required",type:"Server Error"},
    "599": {text:"Network Connect Timeout Error",type:"Server Error"},
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
                const expected: string = statsMap[key].text;
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
                const expected: string = statsMap[key].text;
                expect(pipe["transform"](num)).toEqual(expected);
            });
        });

        Object.keys(statsMap).forEach((key)=>{
            it(`should return text "${statsMap[key]}" for code "${key}"`,()=>{
                const expected: string = statsMap[key].text;
                expect(pipe["transform"](key)).toEqual(expected);
            });
        });

        Object.keys(statsMap).forEach((key)=>{
            it(`should return type "${statsMap[key]}" for code ${key}`,()=>{
                const num: number = pipe["toInt"](key);
                const expected: string = statsMap[key].type;
                expect(pipe["transform"](num,"type")).toEqual(expected);
            });
        });

        Object.keys(statsMap).forEach((key)=>{
            it(`should return type "${statsMap[key]}" for code "${key}"`,()=>{
                const expected: string = statsMap[key].type;
                expect(pipe["transform"](key,"type")).toEqual(expected);
            });
        });

    });

});
