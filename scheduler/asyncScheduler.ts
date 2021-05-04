import { asyncScheduler, of, fromEvent } from 'rxjs';
import { observeOn, subscribeOn, tap} from 'rxjs/operators';

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete')
};

const sub = asyncScheduler.schedule(
  console.log, 2000,
  'Hello Vova'
);

sub.unsubscribe();

of(1,2,3).pipe(
  tap(observer),
  subscribeOn(asyncScheduler, 2000)
).subscribe(observer);