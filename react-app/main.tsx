import React from 'react';
import { createRoot } from 'react-dom/client';
import "./main.less"
import App from './App';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <div className='main'> <App /> </div>;

// Render application in DOM
createRoot(document.getElementById('root')).render(app);
