import {combineReducers} from 'redux'


const init = {
    id:"",
    username:""
}

const AuthReducer=(state=init, action)=>{
    switch (action.type) {
        case value:
            
            break;
    
        default:
            return state;
    }
}





// Pertama kali app running, reduser akan menjalankan kode yang ada di 'default'
// pada defailt kita akan return 'state yang berisi object 'init' sebagai data awal