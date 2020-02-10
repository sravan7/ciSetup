

const getDbData = (type)=> {
    const dbData = JSON.parse(window.localStorage.getItem(type));
    return dbData;
}

const verifyUserEmailAndPassword = (email, password) => {
        let dbData = getDbData("users");
        if(Object.keys(dbData).includes(email)){
            let user = dbData[email];
            if(user.password===password){
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return false;
        }
}

export const postLogin = (inputData)=>{
    const {email,password} = inputData;
    const outputData = {};
    if(verifyUserEmailAndPassword(email,password)){

            return {isError:false,value:email}
    }
    else {
        return {isError:true,value:"no user exists"}
    }
}

