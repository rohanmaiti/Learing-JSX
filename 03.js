const root = ReactDOM.createRoot(document.querySelector("#root"));

const list = (
    <ol>
     <li>List Item 1</li>
     <li>List Item 2</li>
     <li>List Item 3</li>
    </ol>
   );
   //another way of rendering 
//    ReactDOM.render(list,document.getElementById('root'));

   //assigning attributes to the JSX elements

   const heading = (<>
   <h1 className="heading" id="heading1" >Hiii this is h1 </h1>
   <h2 className="heading" id="heading2" >Hiii this is h2 </h2>
   </>)
//    root.render(heading)

   //while using self closing tag you have to use closing tag like <br/>

   // using eventListener to JSX
   function myFunc(){
    alert("hello from myFunc");
   }
   const button = (<>
   <button onClick={myFunc}>click me</button>
   </>)
//    root.render(button);

   // how it works in terms of array 
   const listArray = [
    <li>Item 1</li>,
    <li>Item 2</li>,
    <li>Item 3</li>
   ];
//    root.render(listArray);