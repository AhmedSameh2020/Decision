/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DiagramComponent } from './diagram.component';

let component: DiagramComponent;
let fixture: ComponentFixture<DiagramComponent>;

describe('diagram component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DiagramComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DiagramComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});