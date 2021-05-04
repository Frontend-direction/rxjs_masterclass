import { BehaviorSubject, Subject } from 'rxjs';
import { scan, distinctUntilKeyChanged, map } from 'rxjs/operators';

export class ObservableStore {
  private _store: BehaviorSubject<any>;
  private _stateUpdates: Subject<any>;

  constructor(initState) {
    this._store = new BehaviorSubject(initState);
    this._stateUpdates = new Subject();

    // acumulate state
    this._stateUpdates.pipe(
      scan((acc, curr) => {
        return { ...acc, ...curr }
      }, initState)
    ).subscribe(this._store);
  }

  selectState(storeKey) {
    return this._store.pipe(
      distinctUntilKeyChanged(storeKey),
      map(state => state[storeKey])
    )
  }

  updateState(newState: object) {
    this._stateUpdates.next(newState);
  }

  stateChanges() {
    return this._store.asObservable();
  }
}