
function customRetray({ retryAttempts = 3, excludedStatusCode = [], attemptPause = 1000 } = {}) {
  return function(source) {
    return source.pipe(
      rxjs.operators.retryWhen(attempts => {
        return attempts.pipe(
          rxjs.operators.mergeMap((error, i) => {
            const attemptsNumber = i + 1;
            console.log(attemptsNumber, retryAttempts)
            if(attemptsNumber > retryAttempts || excludedStatusCode.find(e => e === error.status)) {
              return rxjs.throwError(error);
            }
            console.log('Retry', i)
            return rxjs.timer(attemptsNumber * attemptPause)
          })
        );
      })
    );
  }
}

const click$ = rxjs.fromEvent(document, 'click');

click$.pipe(
  rxjs.operators.mergeMapTo(rxjs.throwError({
    status: 400,
    message: 'Server error'
  }).pipe(
    customRetray(),
    rxjs.operators.catchError(err => rxjs.of(err))
  ))
).subscribe(console.log, console.info);