const ball = document.getElementById('Circle');

rxjs.interval(0, rxjs.animationFrameScheduler).pipe(
  rxjs.operators.takeWhile(val => val <= 200)
).subscribe(val => {
  ball.style.transform = `translate3d(0, ${val}px, 0`;
});