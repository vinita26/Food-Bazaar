import React from 'react';
import ReactDOM from 'react-dom/client';

// const App = () => {
//     return (
//     <div>
//         <h1>Food Bazaar</h1>
//     </div>
//     )
// }
const heading = React.createElement('h1', {id:"heading"}, "Hello from React !!");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

// export default App;

