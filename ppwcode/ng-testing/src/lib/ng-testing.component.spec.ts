import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestingComponent } from './ng-testing.component';

describe('NgTestingComponent', () => {
    let component: NgTestingComponent;
    let fixture: ComponentFixture<NgTestingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgTestingComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgTestingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
