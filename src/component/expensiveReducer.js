export const expensiveReducer = ( state=[], action ) => {
    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
            
        case 'remove':
            return state.filter( cost => cost.id !== action.payload )
    
        default:
            return state
    }
}