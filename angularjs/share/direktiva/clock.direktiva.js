app.directive('agSat',function(){
    return{
        restrict:'AE',
        template:'Ovo je sat direktiva.{{time}}',
        scope: {
            user:'=user'
        },
        link:function(scope,el,attr){
            scope.time=new Date().toLocaleTimeString
        }
    }
})