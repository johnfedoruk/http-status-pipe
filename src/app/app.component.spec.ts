import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpStatusModule } from './modules/http-status/http-status.module';
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                HttpStatusModule
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
