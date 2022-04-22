import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePollComponent } from './private-poll.component';

describe('PrivatePollComponent', () => {
    let component: PrivatePollComponent;
    let fixture: ComponentFixture<PrivatePollComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ PrivatePollComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrivatePollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
