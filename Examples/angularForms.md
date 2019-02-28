* import following module into the spec.ts
```ts
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
```
* import into beforeEach imports
```ts
imports: [ ReactiveFormsModule, FormsModule ]
```
* test like below in the specs
```ts
component.formName.controls['value'].setValue('something');
```
