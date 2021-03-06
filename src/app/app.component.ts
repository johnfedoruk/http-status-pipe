import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public readonly codes: number[] = [
        100,
        101,
        102,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        226,
        300,
        301,
        302,
        303,
        304,
        305,
        307,
        308,
        400,
        401,
        402,
        403,
        404,
        405,
        406,
        407,
        408,
        409,
        410,
        411,
        412,
        413,
        414,
        415,
        416,
        417,
        418,
        421,
        422,
        423,
        424,
        426,
        428,
        429,
        431,
        444,
        451,
        499,
        500,
        501,
        502,
        503,
        504,
        505,
        506,
        507,
        508,
        510,
        511,
        599
    ];

    public onSelectStatusCode(status: number): void {
        this.onOpenLink(`https://httpstatuses.com/${status}`);
    }

    public onOpenGitHub(): void {
        this.onOpenLink(`https://github.com/johnfedoruk/http-status-pipe`);
    }

    public onOpenNpm(): void {
        this.onOpenLink(`https://www.npmjs.com/package/http-status-pipe`);
    }

    protected onOpenLink(link: string): void {
        window.open(
            link,
            '_blank'
        );
    }
}
