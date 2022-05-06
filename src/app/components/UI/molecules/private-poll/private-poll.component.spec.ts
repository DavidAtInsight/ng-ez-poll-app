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

    it('should create PrivatePollComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should render h3 with "Have a private poll code?"', () => {
        const element: HTMLElement = fixture.nativeElement;
        expect(element.textContent).toContain('Have a private poll code?');
    })

    it('should call onSubmit() with templateRef', () => {
        const onSubmitSpy = jest.spyOn(component, 'onSubmit');
        const templateRef = ngMocks.findTemplateRef('notificationTemplate');

        //simulate onSubmit()
        component.onSubmit(templateRef);

        //template ref should be passed in to onSubmit()
        expect(onSubmitSpy).toBeCalledWith(templateRef);
    })
});
