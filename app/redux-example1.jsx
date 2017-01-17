var redux = require('redux');


console.log('Starting Redux example');
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New State', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url +'" target="_blank">View your Location</a>'
  }
});


var currentState = store.getState();
console.log('currentState',currentState);

 store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('MAD MAX', 'ACTION'));

store.dispatch(actions.addMovie('NEW MAX', 'HORROR'));

store.dispatch(actions.removeMovie(1));
