var nextMovieId = 1;

export var hobbiesReducer = (state = [], action) => {
  switch(action.type){
    case "REMOVE_HOBBY":
      return state.filter((hobby) => hobby.id !== action.id);

    case "ADD_HOBBY":
      return[
        ...state,
          {
            "id" : nextMovieId++,
            "hobbyName" : action.hobby
          }
        ];

    default:
      return state;
  };
};

export var nameReducer = (state = "Anonymous", action) => {
  switch(action.type){
    case "CHANGE_NAME":
      return action.name;
    default:
      return state;
  };
};

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type){
    case "START_LOCATION_FETCH":
      return{
        ...state,
        isFetching: true,
        url: undefined
      };
    case "COMPLETE_LOCATION_FETCH":
      return{
        ...state,
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  };
};
