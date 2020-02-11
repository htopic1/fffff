app.factory('loginService',function(){
    var loginData={}
    function isLogged(username,pass){
        if(username==='admin' && pass===123)
        {
        return true}
        return false
    }
    return
    {
        checkLogin:isLogged
    }
});