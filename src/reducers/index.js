import {combineReducers} from 'redux'


const init = {
    id:"",
    username:"",
    error:false
}

const AuthReducer=(state=init, action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // Akan menyalin property di state untuk kemudian di ubah id dan usernamenya 
            return {...state, id: action.payload.id, username: action.payload.username}
    
            // Hilangkan id dan username
        case "LOGOUT_SUCCESS":
            return {...state, id:"", username:""}

        case "LOGIN_ERROR":
            return {...state, error:true}

        default:
            return state;
    }
}

const cart={
    id:"",
    jumlah:""
}

const CartReducer=(state=cart,action)=>{

    switch (action.type) {
        case "ADD_CART":

            return{...state, id:action.payload.id, jumlah:action.payload.jumlah}
        default:
            return state
    }
}

const reducers=combineReducers(
    {
        auth:AuthReducer,
        cart:CartReducer
    } 
)



export default reducers



// Pertama kali app running, reduser akan menjalankan kode yang ada di 'default'
// pada defailt kita akan return 'state yang berisi object 'init' sebagai data awal