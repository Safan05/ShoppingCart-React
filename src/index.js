import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
const root = createRoot(document.getElementById('root'));
root.render(<App/>);