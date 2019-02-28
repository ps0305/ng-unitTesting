* Put below code snippet in beforeEach
```ts
var store = {};

      spyOn(localStorage, 'getItem').and.callFake(function (key) {
          return store[key];
        });
      spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
          return store[key] = value + '';
        });
      spyOn(localStorage, 'clear').and.callFake(function () {
            store = {};
 });
 ```
 * set in spec like:
 ```ts
 localStorage.setItem('someContent', JSON.stringify(
    {
      'Id1': 'data1',
      'Id2': 'data2',
      'Id3': 'data3'
    }
   ));
 
