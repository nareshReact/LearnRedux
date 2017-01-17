var redux = require('redux');

var stateDefault = {
   searchText: '',
   showCompleted: false,
   todos: []

};
var reducer = (state = stateDefault,action) => {

  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      };
      default:
      return state;
  }
};
var store = redux.createStore(reducer,redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('text is',state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState',currentState);

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'naresh'
});

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'kumar'
});
