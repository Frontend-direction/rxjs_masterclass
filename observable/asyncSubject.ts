import { AsyncSubject } from 'rxjs';


const subscriber = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete'),
};

const subject = new AsyncSubject();

subject.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);

subject.complete();