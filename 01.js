const root = ReactDOM.createRoot(document.querySelector("#root"))

//creating different JSX element
// let para1 = 
// <>
// <h1>Hello Rohan</h1>
// </>
// root.render(para1)


//rendering variable in JSX
let a = 10;
let b = 20;
const para2 = <> a + b </>
// root.render(para2);
const para3 = <> {a + b} </> // to render value we need to write in between {} bracket
// root.render(para3) 


// let obj = {
//     a:<p>this is a tag</p>,
//     b:<p>this is b tag</p>
// }
// root.render(<>{obj.a} obj.b</>) // difference between using {} 


// using array how we render elements
let array = [1,2,3,4,5,6,]
let para4 = <>
{
    // array.map(ele=><li>ele</li>)    wrong way
    // array.map(ele=><li>{ele}</li>)  correct way
}
</>
// root.render(para4)