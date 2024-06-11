import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';

const App = () => {
    return (
    <div>
        <Header />
        <Body />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

