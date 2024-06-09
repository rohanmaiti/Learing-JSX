const root = ReactDOM.createRoot(document.querySelector('#root'));

// let a = 10;
// let b = 20;
// let obj ={
//     name:"Rohan",
//     age:20
// }
// let para1 = <>
// {a + b}
// <br/>
// {obj.name}
// {obj.age}
// </>
// root.render(para1)


// nested compopnent rendering **** ||it is also called as nestes jsx
let para1 = <div>
<p>this is a para 1</p>
<p>this is a para 2</p>
<p>this is a para 3</p>
<p>this is a para 4</p>
           </div>
//js X----javaScript XML... above are jsx components

//***  dom converts in html but react convert into dom then dom convert into html3 */
// root.render(para1);


const para2 = <div>{2 / 4}</div> // ans = 0.5
// root.render(para2);

let firstNumber = 1;
let lastNummber = 100;
const para4 = <div>{firstNumber/lastNummber}</div>
// root.render(para4);

var obj={
    firstNumber:2,
    lastNumber:100
}
const para3 = <div>{
    obj.firstNumber / obj.lastNumber
    }</div>
// root.render(para3)


var obj2={
    firstNumber:<p>First Number</p>,
    lastNumber:<b>Last NUmber</b>
}

// root.render(obj2.firstNumber);
// root.render(obj2.lastNumber);





// const imageAddress = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
// const pic = <img className="border" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"  width="250px" height="250px"/>
// root.render(pic);


//  const pic1 = <img className="border" src={imageAddress} width="250px" height="250px"/>
//  root.render(pic1);

// var imageAddress;
// if(true)
// imageAddress = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";
// else
// imageAddress = '';

// const pic2 = <img src={imageAddress} width="250px" height="250px" />
// root.render(pic2);




// const pic2 = <img src={
//     true?"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg":''
// } width="250px" height="250px" />
// root.render(pic2);
 //***between these curly brasis no  loop , if else ,switch work but ternary operator, arrays itarator like filter,forEach,map  works.
 
 const pic2 = <>
 if(true){
<h1>Hello</h1>
 }else{
<h1>hii</h1>
 }
 </>
//  root.render(pic2)

 const div = <>
 {
    false ? <h1>Rohan</h1>:<h1>Rahul</h1>
 }
 </>
//  root.render(div)

 let array = ["li-1","li-2","li-3","li-4","li-5","li-6"]

let para5 = <div>
    {
    array.map((ele)=>{
    
    return <li>{ele}</li>
    })
    }
</div>
// root.render(para5);

  
