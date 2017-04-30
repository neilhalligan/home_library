import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockBookService {
  constructor() { }

  getList(): Observable<Response> {
    let responseOptions = new ResponseOptions({ body: '[]' });
    return Observable.of(new Response(responseOptions));
  }
}
