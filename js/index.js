// console.log("hello world")
// var a = 20;
// const b =30;
// a = 60;
// console.log(a,b)


// let a = 10.20;
// let b = "hello"
// let c = undefined;
// let d;
// let e =true;

// let r ={
//     name: "chandan"
    
// }

// console.log(typeof e);


// let a =30;
// a +=30;

// console.log(a)



// if(10){
//     console.log(false);
// }
// else if(50){
//     console.log(true);

// }

// 


// for(let i =0; i<10; i++){
//     console.log("hello",i
//     )

// }


// let a =0

// while ( a<10 ){
//     console.log("hello-world",a)
//     a++
// }



// function hello(name ="user",b,c){
//     console.log("world" + name,b);
// }
// // hello("bol",90)


// let b = hello


// b('lion',80)

// function action(a,b,callback){
//     callback(a,b);
// }

// function min(m,n){
//        console.log(m-n);
// }

// action(20,30,min)

// function action(a,b,callback){
//    return callback(a,b);

// }

// let r = action(20,30,(m,n)=>{
//     console.log(m*n);
//     return(m+n);
// })
// console.log(r);

// let a = {
//     name: "john",
//     age: 23,
//     address:{
//         pin:712502
//     },
//     hobbies:['swimming','reading'],
//     ismarreige:false,
//     getDetails: function(){
//         console.log(this.name,this.age,this.address.pin,this.hobbies,this.ismarreige);
//     }
// }



// let {age} = a

// console.log(age);


// let arr =[20,30, ,50,40]
// arr[arr.length] =600

// console.log(arr[arr.length - 1])

const heading = document.getElementById('hello')
// heading.style.backgroundColor ="blue"
// heading.style.color ="white"
// heading.style.padding = '13px'
// heading.style.margin = '13px' 
// heading.style.border ="none"
// heading.style.textTransform ="uppercase"
// heading.style.fontWeight ="600"



// heading.classList.add("d")
// // console.log(heading.classList.contains('a'))
// heading.setAttribute('title','on')
// console.log(heading.getAttribute('id'))
// console.log(heading.dataset.start)

// heading.addEventListener('click', () => {
// heading.classList.toggle('active');
// // if(heading.classList.contains("active")){
// //     heading.classList.remove("active")
// // }
// // else{
// //     heading.classList.add("active")

// }

// // })
// heading.addEventListener("keyup", () => {
//     console.log("key down");
// })

const f =document.querySelectorAll('p')
const g =document.getElementsByClassName('text')
// console.log(f,g)
f.forEach((elem) =>{
  elem.addEventListener("click",()=>{
    elem.style.color="red"

  })


})