import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/header.css';
import './styles/homepage.css';
import './styles/news.css';
import './styles/library_info.css'
import './styles/book_search.css'
import './styles/login.css'
import './styles/my_books.css'
import './styles/burger.css'
import './styles/smooth_transitions.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
