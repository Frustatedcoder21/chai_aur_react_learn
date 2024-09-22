function render_react(react_element,root){
    const ele= document.createElement(react_element.type);
    ele.innerHTML=react_element.children;
    for (const prop in react_element.prop) {
         ele.setAttribute(prop,react_element[prop]);
        }
        root.appendChild(ele);
    }

const react_element={
    type:'a',
    prop:{
    href:"https://github.com/",
    target:"_Blank"
    },
    children:"Click me"

}
const root= document.querySelector('#root');

render_react(react_element,root);