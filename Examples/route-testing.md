[Mocking router events subscribe](https://stackoverflow.com/questions/38475342/mocking-router-events-subscribe-angular2)

```js
// import RouterTestingModule
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

// under describe
let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }
  
  class MockRouter {
        navigate = jasmine.createSpy('navigate');
        public ne = new RoutesRecognized(0, 'http://localhost/:4200/home', 'http://localhost/:4200/home', null);
        public events = new Observable(observer => {
        observer.next(this.ne);
        observer.complete();
    });
  
   beforeEach(() => {
  providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: Router, useClass: MockRouter }
      ],
   imports: [RouterTestingModule.withRoutes([
        { path: 'desired-path', component: targetComponent },
        { path: '', component: targetComponent }
        ]
    }
  
 
// under it block
expect(mockRouter.navigate).toHaveBeenCalledWith(['home/sign-in']);
