import { ReplaySubject } from 'rxjs';


const subject = new ReplaySubject();

subject.next('Foo');

subject.subscribe(console.log);

subject.next('Baz');