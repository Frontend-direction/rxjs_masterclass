
const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete')
};

const subject = new rxjs.ReplaySubject();
const click$ = rxjs.fromEvent(document, 'click');
const ajax$ = rxjs.ajax.ajax('https://api.github.com/users/octocat');

const sharedClick$ = click$
.pipe(
  rxjs.operators.mergeMapTo(ajax$),
  rxjs.operators.shareReplay(1)
);

sharedClick$.subscribe(observer);

setTimeout(() => {
  console.log('subscribing');
  sharedClick$.subscribe(observer);
}, 5000);

