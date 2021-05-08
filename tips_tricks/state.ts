import { BehaviorSubject, interval, of } from "rxjs";
import { concatMap, delay, pluck, take, withLatestFrom } from 'rxjs/operators';


function saveAnswer(e, id) {
  return of(e, id).pipe(
    delay(2000)
  )
};

const store$ = new BehaviorSubject({
  testId: 123,
  complete: false,
  moreData: {},
});

const interval$ = interval(1000);

interval$.pipe(
  take(3),
  withLatestFrom(store$.pipe(
    pluck('testId')
  )),
  concatMap(([e, testId]) => {
    return saveAnswer(e, testId);
  })
).subscribe(console.log)