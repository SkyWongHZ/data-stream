

const  initState={
    count:100,
    max:1000,
}


function todoApp(state=initState,action){
    console.log('action',action);
    switch(action.type){
        case 'ADD':
            return {...state,count:state.count+1}
        case 'SUBSTR':
            return {...state,count:state.count-1}
        case 'RESET':
            return{...state,count:action.maxNum}
        default:
            return  state
    }
}



export default  todoApp