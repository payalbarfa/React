 ### What is jxs ?
   JSX is a syntax extension that lets us write HTML like markup in a javaScript file. in early days of react writing code even for a simple react elemnt was too long and when it becomes on nested element it become even harder and messey and it it was not even readable than JSX came into picture in which we can react element by writing HTML like code. ex--

const head=<h1>heading</h1>


const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(head);
here head is variable that holds the JSX code and we can render it to our dom

const root = ReactDOM.createRoot(document.querySelector(".root")); root.render(head);

This JSX code first transpiled into react element by babel. React and JSX are two diffrent things and can be used independently.

  ### JSX Superpowers--

JSX allowed the developers to write readable code structure of elements in the form of a merge between html-like markeup and javascript in a react app instead of using react code (React.createElement()) which is hard to be read or developed by other developers of the team.
JSX can be transpiled by babel (js compiler) into React.createElement() which at the end will be rendered by the root to the browser and become part of the DOM.
JSX can skip malicious executable code (inside curly braces of JSX) coming from API data request (cross-origin scripting attack).

### Role of 'type' attribute in script tag? What options can i use there?

type' attribute is the type of script represented and can be a classic script, javascript module, import map, data block.
in case the script tag containing javascript code :-
value: no type attribute or type attribute with value of empty string or specified javascript MIME type. (type="")
in case treating the code as javascript module, here the processing of the script content code is deferred so no defer attribute is needed and this type of script require the use of CORS protocol for cross-origin fetching:-
value: type="module"
in case of import map, it means that the content of the html element has import map which is a JSON object that the developers use to control how the browser will resolve module specifiers when importing js modules and all other script attributes will be ignored :-
value: type="importmap"
in case of data block, the script content is represented as data block which won't be processed by the browser and all other script attributes will be ignored :-
value : any valid MIME type but not a javascript MIME type


##### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

{TitleComponent}: It state that TitleComponent is javascript variable or expression and it can be used in {} in JSX. <TitleComponent/>: It state that TitleComponent is component in react that is returning some JSX. A component is written in this format in react if it doesn't have any children.

<TitleComponent><TitleComponent/>:It ia also a component in react but this time it is having some children that we write between them.

<TitleComponent>
<ChildComponent1/>
<ChildComponent2/>
<TitleComponent/> 
