// Action creator 
// action creator = function biasa yang terhubung dengan reducer melalui connect
// Harus return object yang memiliki property 'type'
import axios from 'axios'

export const onLoginUser=(USERNAME, PASSWORD)=>{

    return (dispatch)=>{
        // Hanya ketika menggunakan get yang terdapat params:

        axios.get(
            "http://localhost:2019/users", 
            {
                params:{
                    username:USERNAME,
                    password:PASSWORD
                }
            }
        ).then((res)=>{
            // res.dara merupakan sebuah array
            // jika data ditemukan, length > 0
            // jika data tidak ditemukan, length = 0
            if (res.data.length == 0) {
                this.state({wrong: true})
                
            }else{

                let {id, username}=res.data[0]
                // 1. mengirim data ke redux
                // res.data[0] ={id, email, username , password}

                this.state({login:true})

                // 2. Mengirim data ke local storage
                localStorage.setItem(
                    'userData',
                    JSON.stringify({id,username}) 
                )
                // menyimpan data di redux 
                dispatch(
                    {
                        type :"LOGIN_SUCCESS",
                        payload:{
                            id,username
                        }
                    }
                )

            }
        }).catch((err)=>{
            
        })
    }
    
}


export const onLogoutUser=()=>{
    // menghapus data di local storage
    localStorage.removeItem('userData')

    // menghapus data di redux
    return {
        type:"LOGOUT_SUCCESS"
    }
}

// ketika export "menggunakan default" 
    // ketika inport di file lain tidak menggunakan {}

// sedangkan bila "tidak menggunakan default "
    // ketika inport di file lain harus menggunakan {}

// HANYA ADA SATU "export default " dalam satu file
