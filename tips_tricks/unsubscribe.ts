import { interval, of, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
 
const onDestroy$ = new Subject();
const interval$ = interval(1000);
const data$ = of(10);

interval$.pipe(
  takeUntil(onDestroy$)
).subscribe(console.log);

data$.pipe(
  takeUntil(onDestroy$)
).subscribe(console.log);

setTimeout(() => {
  onDestroy$.next();
  onDestroy$.complete();
}, 4000);
