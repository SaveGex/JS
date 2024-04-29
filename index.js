// let array = [1,2,3,3];// new Array(1,2,3...)
//  for(var i=0; i<3; i++){
//     console.log(array.length);
//  }
// alert("Hello World");
// var answer = confirm("All right?");
// var answer = prompt("All Right?");
// if(answer == null){
//     alert("You had writing none");
//     var check =prompt("Want to write?");
//     if(check=="yes"){
//         while(check=="yes" || answer==null){
//             answer = prompt("All Right?");
//             alert("You had writing none");
//             check =prompt("Want to write?");
//         }
//     }
//     console.log("You writed " + answer);
// }
// else console.log("BAD gUY");


// function print(){
//     console.log("BONK");
// }
// print();

// function UserInput(el){
//     if(el.value!=null){
//         el.style.fontSize = "40px";
//     }
//     if(el.value=="font"){
       
//         el.style.fontFamily = "system ui"; 
//     }
//     else if(el.value == "comic"){
//         el.style.fontFamily= "Comic Sans Ms";
//     }
// }

// var counter=0;
// function btnclick(el){
//     counter++;
//     el.innerHTML ="Count: " + counter;

// }

// var left=-25;
// var right=25;
// function rotate_left(){
//     var main_div = document.getElementById("main_button")
//     main_div.style.transform = "rotate(" + left + "deg)";
//     console.log(left);
//     left-=25;

// }
// function rotate_right(){
//     var main_div = document.getElementById("main_button")
//     main_div.style.transform = "rotate(" + right + "deg)";
//     console.log(right);
//     right+=25;

// }


document.getElementById('myform').addEventListener("submit", function(e){
    e.preventDefault();
    var el = document.getElementById("myform");
    var name = el.username.value;
    var email = el.email.value;
    var password = el.password.value;
    var gender = el.gender.value;
    var error = '';

    if (name.length < 5) {
        error = "Ім'я занадто коротке";
    } else if (!email.includes("@")) {
        error = "Email не містить символ '@'";
    } else if (password.length < 5) {
        error = "Пароль занадто короткий";
    } else if (gender == null || gender == '') {
        error = "Ви не вибрали стать";
    }

    if (error !== '') {
        document.getElementById("error").innerText = error;
        return false;
    } else {
        document.getElementById("error").innerText = "Все круто";
    }

    window.location = "https://www.youtube.com/watch?v=aMJlyXtYu4c&list=PL7vq4D0vOpQbGerLS1pEgvPXSLUXgvFEo&index=13";
    return false;
});
