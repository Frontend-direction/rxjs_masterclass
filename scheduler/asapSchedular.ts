import { asyncScheduler, asapScheduler, of } from 'rxjs';
import { observeOn, subscribeOn, tap} from 'rxjs/operators';

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete')
};

// Miscrotask queue
const async = asyncScheduler.schedule(() => console.log('async'))
const sub = asapScheduler.schedule(() => console.log('asap'));
console.log('sync')