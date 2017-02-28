var Axios = require("axios");
export var startLocationFetch = () => {
  return {
    type: "START_LOCATION_FETCH"
  };
};

export var completeLocationFetch = (url) => {
  return {
    type: "COMPLETE_LOCATION_FETCH",
    url
  };
};

export var changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    name: name
  };
};

export var addHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    hobby
  };
};

export var removeHobby = (id) => {
  return {
    type: "REMOVE_HOBBY",
    id
  };
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());
    Axios.get("http://ipinfo.io").then(function(res){
      var loc = res.data.loc;
      var url = "http://maps.google.com?q="
      dispatch(completeLocationFetch(url+loc));
    });
  };
};
