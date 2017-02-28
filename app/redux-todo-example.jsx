var redux = require("redux");

console.log("Starting redux example");

var stateDefault = {
  searchText: "",
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {

  switch(action.type){
    case "CHANGE_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  };

  return state;

};

var store = redux.createStore(reducer);

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("State changed");
  console.log(state);
});

var action = {
  type: "CHANGE_SEARCH_TEXT",
  searchText: "Nuevo texto de busqueda"
};

store.dispatch(action);

unsubscribe();

var action = {
  type: "CHANGE_SEARCH_TEXT",
  searchText: "Texto de busqueda 2"
};

store.dispatch(action);
