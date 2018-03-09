import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Homepage from './components/Homepage.jsx'
import News from './components/News.jsx'
import Libraries from './components/Libraries.jsx'
import BookSearch from './components/BookSearch.jsx'
import Login from './components/Login.jsx'
import MyBooks from './components/MyBooks.jsx'
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
}




class App extends Component{


  render() {
  
    return (
     
      <Router>
       
        <div>
          <Header/>
          
          <Route component={ScrollToTop}/>
          <Route exact path="/" component={Homepage}/>
          <Route path="/news" component={News}/>
          <Route path="/libraries" component={Libraries}/>
          <Route path="/booksearch" component={BookSearch} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mybooks" component={MyBooks}/>      
       
        </div>
      </Router>
      
      
    );
  }
}

export default App;
