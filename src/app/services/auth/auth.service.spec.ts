import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MockInstance, MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';


import { User } from 'src/app/models/auth/user.model';
import { PollService } from '../poll/poll.service';
import { AuthService } from './auth.service';
import { AuthData } from 'src/app/models/auth/auth-data.model';

describe('AuthService', () => {
    let authService: AuthService;
    let angularFireAuthService: AngularFireAuth;
    //let mockAngularFireAuthService: any;
    let pollService: PollService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ MockProvider(AuthService),
                        MockProvider(AngularFireAuth),
                        //  MockProvider(AngularFireAuth, {                   
                        //     email: 'test@test.com',
                        //     uid: 'asdf123'
                        // }, 'useValue'),
                        MockProvider(PollService)
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        authService = TestBed.inject(AuthService);
        // mockAngularFireAuthService = {
        //     authState: jest.fn()
        // }
        //authService = new AuthService(angularFireAuthService, pollService);
        angularFireAuthService = TestBed.inject(AngularFireAuth);
        pollService = TestBed.inject(PollService);
    });

    it('should create AuthService', () => {
        expect(authService).toBeTruthy();
    });

    it('should have default redirectUrl', () => {
        expect(authService.redirectUrl).toBeFalsy();
    });

    // it('should call getAuthUser()', (done) => {
    //     // const getAuthUserSpy = jest.spyOn((authService), 'getAuthUser');
    //     const mockFirebaseUser = {                   
    //         email: 'test@test.com',
    //         uid: 'asdf123'
    //     }
    //     const mockUser = {                   
    //         email: 'test@test.com',
    //         userId: 'asdf123',
    //         isAuthenticated: true
    //     } as User
    //     // const mockResponse = jest.spyOn(authService, 'getAuthUser').mockReturnValue(of(mockUser));
    //     // MockInstance(AuthService, () => ({
    //     //     mockResponse
    //     // }))

    //     jest.spyOn(mockAngularFireAuthService, 'authState').mockReturnValue(of(mockFirebaseUser));
        
    //     authService.getAuthUser().subscribe(
    //         {
    //             next: user => { // not nessecary to declare next, it is the default actoin on observers
    //                 expect(user).toEqual(mockUser);
    //                 done();
    //             },
    //             error: error => console.log(error)
    //         }
    //     );
    //     //jest.spyOn(mockAngularFireAuthService, 'getAuthUser').mockReturnValue(of(mockUser));
    //     //expect(mockAuthService).toHaveBeenCalled();
    // })

    it('should call loginUser() with authData', () => {
        const loginUserSpy = jest.spyOn(authService, 'loginUser');
        const authData = {
            email: 'test@test.com',
            password: '123456'
        } as AuthData

        //simulate loginUser()
        authService.loginUser(authData);

        //authData should be passed in to loginUser()
        expect(loginUserSpy).toBeCalledWith(authData);
    })

    it('should call registerUser() with authData', () => {
        const registerUserSpy = jest.spyOn(authService, 'registerUser');
        const authData = {
            email: 'test@test.com',
            password: '123456'
        } as AuthData

        //simulate registerUser()
        authService.registerUser(authData);

        //authData should be passed in to registerUser()
        expect(registerUserSpy).toBeCalledWith(authData);
    })
});
