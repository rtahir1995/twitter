"use strict";
var counterName = $("#signup-input").val().length
$("#signup-input").on("input",function(){
    counterName = $("#signup-input").val().length
})
$(".next-button").on("click", function(e){
    e.preventDefault()
})

var isPhone = true
$(".signup-link").on("click",function(a){
    a.preventDefault()
   
    if(isPhone === true){
        $(".label2").text("Email")
        $("#signup-email").attr("type","email")
        $(".signup-link").text("Use phone istead")
        isPhone = false
    }else{
        $(".label2").text("Phone")
        $("#signup-email").attr("type","tel")
        $(".signup-link").text("Use email istead")
        isPhone = true
    }
})

$(".signupdiv").focusin(function(){
    if(wrongName === false){
    $(".signupdiv").css({
        borderColor: "rgb(29,161,242)"
    })
    $(".label1").css({
        color: "rgb(29,161,242)",
        top: "5px",
        fontSize: "13px"
    })
}else {
    $(".label1").css({
        top: "5px",
        fontSize: "13px"
    })
}
})
$(".signupemail").focusin(function(){
    
    $(".signupemail").css({
        borderColor: "rgb(29,161,242)"
    })
    $(".label2").css({
        color: "rgb(29,161,242)",
        top: "5px",
        fontSize: "13px"
    })

})
$(".signupdiv").focusout(function(){
    if(wrongName === false){
    $(".signupdiv").css({
        borderColor: "rgb(207, 217, 222)"
    })
    $(".label1").css({
        color: "rgb(83, 100, 113)",
        top: "15px",
        fontSize: "17px"
    }) 
    } else{
        $(".label1").css({
            top: "15px",
            fontSize: "17px"
        })
    }
    if(counterName === 0){
        $(".label1").css({
            top: "15px",
            fontSize: "17px"
        })
    }else{
        $(".label1").css({
            top: "5px",
            fontSize: "13px"
        })
    }
})
$(".signupemail").focusout(function(){
    $(".signupemail").css({
        borderColor: "rgb(207, 217, 222)"
    })
    $(".label2").css({
        color: "rgb(83, 100, 113)",
        top: "15px",
        fontSize: "17px"
    })
})

var wrongName = false;

var isEmailTrue = true;

$("#signup-input").on("input", function(){
    var signup_input = $("#signup-input").val()
    var counter = $("#signup-input").val().length
   $(".counter").text(counter + " / 50") 

   if(wrongName === false ){
       $(".signupdiv").css({
           borderColor: "rgb(29,161,242)"
       })
       $(".label1").css({
           color: "rgb(29,161,242)"
       })
       $(".error-text").text("")

       wrongName = true
   }else if(wrongName === true & counter === 0 ){
    $(".signupdiv").css({
        borderColor: "red"
    })
    $(".label1").css({
        color: "red"
    })
    $(".error-text").text("What`s your name?")
    $(".error-text").css({
        color: "red",
        fontSize: "11px",
        marginLeft: "10px"
    })
    

    wrongName = true
   }else if(wrongName === true & counter !== 0){
    $(".signupdiv").css({
        borderColor: "rgb(29,161,242)"
    })
    $(".label1").css({
        color: "rgb(29,161,242)"
    })
    $(".error-text").text("")
    //wrongName = false
   }else if(wrongName === false & counter === 0 ){
    $(".signupdiv").css({
        borderColor: "red"
    })
    $(".label1").css({
        color: "red"
    })
    $(".error-text").text("")

    wrongName = true
   }
   
})



var arr= ["+","9","8","7","6","5","4","3","2","1","0"]


/*$("#signup-email").on("input", function(){
    var val = $("#signup-email").val()
    
    for(var i = 0;i<arr.length;i++){
        
        if(val !== arr[i]){
            $(".signupemail").css({
                borderColor: "red",
            })
            $(".label2").css({
                color: "red"
            })
        }else{
            $(".signupemail").css({
                borderColor: "rgb(29,161,242)",
            })
            $(".label2").css({
                color: "rgb(29,161,242)"
            })
        }
    }
})*/











    






