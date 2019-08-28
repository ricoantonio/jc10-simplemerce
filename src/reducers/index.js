import {combineReducers} from 'redux'


const init = {
    id:"",
    username:""
}

const AuthReducer=(state=init, action)=>{
    switch (action.type) {
        case 'asd':
            
            break;
    
        default:
            return state;
    }
}

const reducers=combineReducers(
    {
        auth:AuthReducer
    } 
)

export default reducers


// Pertama kali app running, reduser akan menjalankan kode yang ada di 'default'
// pada defailt kita akan return 'state yang berisi object 'init' sebagai data awal