var redux = require('redux')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
var stateDefault = {
   name: 'Anonymous',
   hobbies: []

};
var nextHobbyId = 1;
var reducer = (state = stateDefault,action) => {

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        searchText: action.name
      };
      case 'ADD_HOBBY':
        return {
          ...state,
          hobbies:[
            ...state.hobbies,
            {
              id: nextHobbyId++,
              hobby:action.hobby
            }
          ]
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
  console.log('name is',state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New State', store.getState());
});

var currentState = store.getState();
console.log('currentState',currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  searchText: 'Andrew'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'CHANGE_NAME',
  searchText: 'Emily'
});
