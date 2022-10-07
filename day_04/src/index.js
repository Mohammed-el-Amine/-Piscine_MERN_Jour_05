import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

// ReactDOM.render(<AppRouter />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppRouter />);