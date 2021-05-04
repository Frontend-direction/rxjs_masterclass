import { Subject, interval } from 'rxjs';
import { multicast, refCount, share } from 'rxjs/operators'; 


const observer = {
  next: val => console.log('next', val),
  error: err => console.error(err),
  complete: () => console.log('complete'),
}

const interval$ = interval(1000); 

const multiInterval = interval$.pipe(
  // multicast(() => new Subject),
  // refCount(),
  share(),
);

const sub1 = multiInterval.subscribe(console.log);
const sub2 = multiInterval.subscribe(console.log);

setTimeout(() => {
  sub1.unsubscribe();
  sub2.unsubscribe();
}, 3000)