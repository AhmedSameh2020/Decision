/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProgressStepsComponent } from './progress-steps.component';

let component: ProgressStepsComponent;
let fixture: ComponentFixture<ProgressStepsComponent>;

describe('progressSteps component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProgressStepsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProgressStepsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
