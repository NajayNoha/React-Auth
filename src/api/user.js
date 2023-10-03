import axios from 'axios';
export const createUser = (user) => {
    const keys = ['name', 'email', 'password'];
    const keysCheck = keys.every((key) => user.hasOwnProperty(key) ) ;
    if (keysCheck) {
        
     axios.post(localStorage.getItem('backendUrl') +'/api/create-user', user)
        .then(response => {
            if(response.data.status){
                localStorage.setItem('user', response.data.data.user)     
                localStorage.setItem('isAuth', true)     
                // redirectTo('home');
            }else return false
        }).catch(er=>{
            console.log(er);
        })
    }
} 

export const loginUser = (email, password) => {
    const u = axios.post(localStorage.getItem('backendUrl') +'/api/login-user', {email: email, password:password})
    .then(response => {
        if(response.data.status){
            localStorage.setItem('user', response.data.data.user)
            localStorage.setItem('isAuth', true)     
            // redirectTo('home');
        }else return false
    }).catch(er=>{
        console.log(er);
        return false    
    })
}


export const logOut = () =>{ 
    // localStorage.setItem('isAuth', false)     
    localStorage.removeItem("user")
    localStorage.removeItem("isAuth")
    // redirectTo('login');

}