import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePollComponent } from './create-poll.component';

describe('CreatePollComponent', () => {
    let component: CreatePollComponent;
    let fixture: ComponentFixture<CreatePollComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ CreatePollComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreatePollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create CreatePollComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle isVisible property', () => {
        //isVisible should be false at first
        expect(component.isVisible).toBeFalsy();

        //simulate toggleModal() to show modal
        component.toggleModal();

        //isVisible should be no be true
        expect(component.isVisible).toBeTruthy();

        //simulate toggleModal() to hide modal 
        component.toggleModal();

        //isVisible should be no be false
        expect(component.isVisible).toBeFalsy();
    })
});
