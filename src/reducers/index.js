import {combineReducers} from 'redux'


const init = {
    id:"",
    username:""
}

const AuthReducer=(state=init, action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // Ankan menyalin property di state untuk kemudian di ubah id dan usernamenya 
            return {...state, id: action.payload.id, username: action.payload.username}
    
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