// let obj = {
//   Name: "Anas",
//   Salary: 15000,
//   tax: () => {
//     console.log(obj.Salary);
//   },
// };
// obj.tax();

// Prototype Pass in Object

// let MyName = {
//   fname: "Anas Ibn Belal",
//   roll: 372,
//   class: "CSE",
//   Print_itms(){
//     alert('Hello World !!');
//   }
// };

// let PrintInfo = {
//   Print_itms() {
//     console.log(this.fname);
//     console.log(this.roll);
//     console.log(this.class);
//   },
// };

// MyName.__proto__=PrintInfo;

//Class Defination

// class CSE {
//   constructor(name, roll, marks) {
//     this.name = name;
//     this.roll = roll;
//     this.marks = marks;
//   }
//   CPGA(cgpa) {
//     if (cgpa > 3.5) {
//       console.log(`Your CGPA is = ${cgpa}`);
//     } else {
//       console.log("Your CGPA is too Low");
//     }
//   }
// }

// let Anas= new CSE("Anas",372,95);
// console.log(Anas);
// console.log(Anas.CPGA(3.95));
// let Sifat=new CSE("Miel Mahmud Sifat",368,99);
// console.log(Sifat);


let Sgn_div=document.querySelector("#main_div");
let signup_top=document.querySelector("#div_sgn");
let sgn_btn_1=document.querySelector("#btn_1");
let sgn_btn_2=document.querySelector("#btn_2");

sgn_btn_1.addEventListener("click",()=>
{
    signup_top.classList.remove("flex");
    signup_top.classList.add("hidden");
    Sgn_div.classList.remove("hidden");
    Sgn_div.classList.add("flex");
});
sgn_btn_2.addEventListener("click",()=>
{
    signup_top.classList.remove("flex");
    signup_top.classList.add("hidden");
    Sgn_div.classList.remove("hidden");
    Sgn_div.classList.add("flex");
});

/// Form Submit Event

let usernameSgn;
let emailSgn;