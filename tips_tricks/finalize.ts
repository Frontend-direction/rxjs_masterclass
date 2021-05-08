import { finalize } from 'rxjs/operators';
import { of } from 'rxjs';


const sub = of(1,2,3).pipe(
  finalize(() => {
    console.log('DONE');
  })
).subscribe(val => {
  console.log(val);
});