import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {

    public transform(code: string | number, render: 'text' | 'type' = 'text'): string | never {
        const CODE: number = this.toInt(code);
        if (render === 'text') {
            return this.getStatusCodeText(CODE);
        } else if (render === 'type') {
            return this.getStatusCodeType(CODE);
        }
    }

    protected toInt(code: string | number): number {
        let num: number;
        if (typeof (code) === 'number') {
            num = code;
        } else if (typeof (code) === 'string') {
            num = +code;
        } else {
            this.onError(`Status code ${code} cannot be converted to a number`);
        }
        if (Number.isInteger(num)) {
            return num;
        } else {
            this.onError(`Status code ${code} is not an integer`);
        }
    }

    protected getStatusCodeText(code: number): string | never {
        switch (code) {
            case 100: return 'Continue';
            case 101: return 'Switching Protocols';
            case 102: return 'Processing';
            case 200: return 'OK';
            case 201: return 'Created';
            case 202: return 'Accepted';
            case 203: return 'Non-authoritative Information';
            case 204: return 'No Content';
            case 205: return 'Reset Content';
            case 206: return 'Partial Content';
            case 207: return 'Multi-Status';
            case 208: return 'Already Reported';
            case 226: return 'IM Used';
            case 300: return 'Multiple Choices';
            case 301: return 'Moved Permanently';
            case 302: return 'Found';
            case 303: return 'See Other';
            case 304: return 'Not Modified';
            case 305: return 'Use Proxy';
            case 307: return 'Temporary Redirect';
            case 308: return 'Permanent Redirect';
            case 400: return 'Bad Request';
            case 401: return 'Unauthorized';
            case 402: return 'Payment Required';
            case 403: return 'Forbidden';
            case 404: return 'Not Found';
            case 405: return 'Method Not Allowed';
            case 406: return 'Not Acceptable';
            case 407: return 'Proxy Authentication Required';
            case 408: return 'Request Timeout';
            case 409: return 'Conflict';
            case 410: return 'Gone';
            case 411: return 'Length Required';
            case 412: return 'Precondition Failed';
            case 413: return 'Payload Too Large';
            case 414: return 'Request-URI Too Long';
            case 415: return 'Unsupported Media Type';
            case 416: return 'Requested Range Not Satisfiable';
            case 417: return 'Expectation Failed';
            case 418: return 'I\'m a teapot';
            case 421: return 'Misdirected Request';
            case 422: return 'Unprocessable Entity';
            case 423: return 'Locked';
            case 424: return 'Failed Dependency';
            case 426: return 'Upgrade Required';
            case 428: return 'Precondition Required';
            case 429: return 'Too Many Requests';
            case 431: return 'Request Header Fields Too Large';
            case 444: return 'Connection Closed Without Response';
            case 451: return 'Unavailable For Legal Reasons';
            case 499: return 'Client Closed Request';
            case 500: return 'Internal Server Error';
            case 501: return 'Not Implemented';
            case 502: return 'Bad Gateway';
            case 503: return 'Service Unavailable';
            case 504: return 'Gateway Timeout';
            case 505: return 'HTTP Version Not Supported';
            case 506: return 'Variant Also Negotiates';
            case 507: return 'Insufficient Storage';
            case 508: return 'Loop Detected';
            case 510: return 'Not Extended';
            case 511: return 'Network Authentication Required';
            case 599: return 'Network Connect Timeout Error';
            default: throw new Error(`Unknown status code ${code}`);
        }
    }

    protected getStatusCodeType(code: number): string | never {
        switch (code) {
            case 100:
            case 101:
            case 102:
                return 'Informational';
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 207:
            case 208:
            case 226:
                return 'Success';
            case 300:
            case 301:
            case 302:
            case 303:
            case 304:
            case 305:
            case 307:
            case 308:
                return 'Redirection';
            case 400:
            case 401:
            case 402:
            case 403:
            case 404:
            case 405:
            case 406:
            case 407:
            case 408:
            case 409:
            case 410:
            case 411:
            case 412:
            case 413:
            case 414:
            case 415:
            case 416:
            case 417:
            case 418:
            case 421:
            case 422:
            case 423:
            case 424:
            case 426:
            case 428:
            case 429:
            case 431:
            case 444:
            case 451:
            case 499:
                return 'Client Error';
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
            case 505:
            case 506:
            case 507:
            case 508:
            case 510:
            case 511:
            case 599:
                return 'Server Error';
            default: throw new Error(`Unknown status code ${code}`);
        }
    }

    public onError(error: string): never | void {
        throw new Error(error);
    }

}
