import axios from "axios";

export async function postSignup(username, email, password){
    console.log(username);
    // axios.post("http://localhost:XXXX/", 
    // {
    //     username: username,
    //     email: email,
    //     password: password
    // }).then();

}

export function checkEmail(email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(regex.test(email)){
        return true;
    }else{
        return false;
    }
}

export async function checkUsername(username){
    //async call to see if username is in database
    //return true if name is found

    return true;
}
