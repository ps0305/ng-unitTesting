import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('Component: () => {

    let component: ExampleComponent;
    let fixture: ComponentFixture<ExampleComponent>;
    let router = {
        navigate: jasmine.createSpy('navigate')
    };

    class MockActivatedRoute {
        queryParams = Observable.of({});
    }

    class MockRouter {
        navigate = jasmine.createSpy('navigate');
    }
//beforeEach
    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ExampleComponent],
            providers: [
                { provide: ActivatedRoute, useClass: MockActivatedRoute },
                { provide: Router, useClass: MockRouter }],
            imports: [ ReactiveFormsModule, FormsModule ],
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ExampleComponent);
        component = fixture.componentInstance;
    });

    it('Should create ExampleComponent', () => {
        expect(component).toBeDefined();
    });

    it('Should call MethodOne - someService ==> resolved', () => {
        let MockedData = {};
        spyOn(someService, 'someMethod').and.returnValue(Observable.of(MockedData));
        component.MethodOne();
        expect(someService.someMethod).toHaveBeenCalled();
    });

    it('Should call MethodOne - someService ==> resolved but empty', () => {
        spyOn(someService, 'someMethod').and.returnValue(Observable.throw([]));
        component.MethodOne();
        expect(someService.someMethod).toHaveBeenCalled();
    });

    it('Should call MethodOne - someService ==> resolved with error code', () => {
        spyOn(someService, 'someMethod').and.returnValue(Observable.throw({ 'code': '' } ));
        component.MethodOne();
        expect(someService.someMethod).toHaveBeenCalled();
    });
  });
