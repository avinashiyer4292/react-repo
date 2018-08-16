const redux= require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

//Create reducer first cos its needed by store
const rootReducer = (state = initialState, action) => {
    //here we have to do updates to current state based on action
    if(action.type === 'INC_COUNTER'){

        //we are returning a new object because we need to maintain state immutability
        return{
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type === 'ADD_COUNTER'){
        
                //we are returning a new object because we need to maintain state immutability
                return{
                    ...state,
                    counter: state.counter + action.value
                };
            }

    return state;
}

//Store
const store = createStore(rootReducer);

console.log(store.getState());


//A store always needs to be initialised with a reducer




//Subscription - needs to be called before dispatch

store.subscribe( () => {
    console.log('[Subscription]', store.getState());
})

//Dispatching action
//store.dispatch takes in an arg - action which is a js object, having a necessary property 'type'
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState());


