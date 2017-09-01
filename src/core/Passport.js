export default class Passport
{
    constructor(){
        this.isLogin=false;
    }
    login(userName,userPass,callback){
        if(userName==='coldbreath'&&userPass=='123456'){
            this.isLogin=true;
            callback()
        }else{
            alert("登录失败")
        }
        
    }
}