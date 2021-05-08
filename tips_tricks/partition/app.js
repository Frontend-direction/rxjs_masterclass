let leftPostion = 0;
const MOVE_SPEED = 20;

//DOM
const box = document.getElementById('box');

//streams
const click$ = rxjs.fromEvent(document, 'click');

const clickPostionX$ = click$.pipe(
  rxjs.operators.pluck('clientX')
);

const [leftSideClick$, rightSideClick$] = rxjs.partition(clickPostionX$, xPos => {
  return xPos < window.innerWidth / 2 
});

leftSideClick$.subscribe(() => {
  box.style.left = `${leftPostion -= MOVE_SPEED}px`
});

rightSideClick$.subscribe(() => {
  box.style.left = `${leftPostion += MOVE_SPEED}px`
});