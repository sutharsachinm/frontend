const initialState = {
    initial: 'Main',
    value: 4,
    clientId: '',
    planId: '',
    role:'',
    registerType: 0,
    api:''
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "ChangeInitial":
           state = {
              ...state,
              initial : action.payload,
          };
          break;
         
        case "changeRegisterType":
            state = {
                ...state,
                 registerType: action.payload,
            };
            break;

        case "ChangeRole":
            state = {
                ...state,
                 role: action.payload,
            };
            break;

        case "ChangeValue":
            state = {
                ...state,
                value: action.payload,
            };
            break;

        case "ChangePlan":
            state = {
                ...state,
                planId: action.payload,
            };
            break;

         case "ChangeClientId":
            state = {
                ...state,
                 clientId: action.payload,
            };
            break;
        case "changeApi":
            state = {
                ...state,
                 api: action.payload,
            };
            break;


    }
    return state;

};


export default reducer;
