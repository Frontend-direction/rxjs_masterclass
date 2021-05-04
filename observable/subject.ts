import { Subject, interval } from 'rxjs';
import { tap } from 'rxjs/operators';

const observer = {
  next: (val) => console.log('next', val),
  error: err => console.log('err', err),
  complete: () => console.log('complete'),
}
const subject = new Subject();

const subscription = subject.subscribe(observer);
const subscription1 = subject.subscribe(observer);


// subject.next('Hello');
// subject.next('World');

const interval$ = interval(1000).pipe(
  tap(val => console.log('interval', val))
)
interval$.subscribe(subject);
