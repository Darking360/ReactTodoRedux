var redux = require("redux");
var Axios = require("axios");

console.log("Starting redux example");

var actions = require("./actions/index");
var store = require("./store/configureStore").configure();

store.dispatch(actions.fetchLocation());

store.subscribe(() => {
  var state = store.getState();
  console.log("New state is");
  console.log(state);
});

store.dispatch(actions.changeName("Miguel"));
store.dispatch(actions.addHobby("Videogames"));
store.dispatch(actions.addHobby("Programming"));
store.dispatch(actions.removeHobby(1));
