
const HelloWorldMessage = <p>Hello, World!</p>;


const rootElement = document.getElementById('root');


ReactDOM.createRoot(rootElement).render(HelloWorldMessage);

console.log("Declarative: React is rendering 'Hello, World!' message.");