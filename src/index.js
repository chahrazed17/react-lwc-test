import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Expose une fonction globale pour Salesforce
window.renderReactApp = (container) => {
    ReactDOM.render(<App />, container);
};
