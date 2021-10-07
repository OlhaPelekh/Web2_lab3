$(document).ready(function(){
    function getUsers(){
    $.get('/getusers',function(data){
    console.log(data);
    })
    }
    getUsers();
   })
   