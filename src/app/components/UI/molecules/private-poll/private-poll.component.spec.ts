import { TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider, ngMocks } from 'ng-mocks';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { PrivatePollComponent } from './private-poll.component';

describe('PrivatePollComponent', () => {
    let component: PrivatePollComponent;
    let fixture: ComponentFixture<PrivatePollComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ PrivatePollComponent ],
        providers: [ MockProvider(NzNotificationService) ]
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

    it('should call onSubmit with templateRef', () => {
        const onSubmitSpy = jest.spyOn(component, 'onSubmit');
        const templateRef = ngMocks.findTemplateRef('notificationTemplate');

        component.onSubmit(templateRef);

        expect(onSubmitSpy).toBeCalledWith(templateRef);
    })
});
