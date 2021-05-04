import { ObservableStore } from './store';

const store = new ObservableStore({
  user: 'joe',
  isAuthenticated: true
});

store.selectState('user').subscribe(console.log);

store.updateState({user: 'Vova'});
