const loading$ = new rxjs.Subject();

const loadingService = {
  showLoader: () => loading$.next(true),
  hideLoader: () => loading$.next(false),
  loadingState$: loading$.asObservable(),
} 