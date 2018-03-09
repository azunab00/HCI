
import React, {Component} from 'react'
import data from '../data.json'
import {Link} from 'react-router-dom'
import Headroom from 'react-headroom'

class Header extends Component{
   
    constructor(){
        super()
        this.onSelect = this.onSelect.bind(this);
        this.state = {prevElement: null}
    }
    

    onSelect(event){
        let el = event.target.parentElement;


        if(this.state.prevElement != null){
            this.state.prevElement.style.backgroundColor = '#865656';
        }
        if(el.textContent == "Kaštela"){
           el.parentElement.parentElement.style.backgroundColor = '#613e3e';
            this.setState({prevElement: el.parentElement.parentElement })
        }
        else
        {
           el.style.backgroundColor = '#613e3e';
            this.setState({prevElement: el })
        } 
    }

    render(){
    

        return(
            <div>
                <Headroom>
                    <div id="nav_bar2">
                        <div className="book_symbol2"></div>
                        <ul onClick = {this.onSelect} id = "header_list">

                            {
                                data.header_content.map(function(item, index){
                                    
                                    if(item.naziv === 'Knjižnice')
                                        return(
                                            <li key = {index} className="dropdown">
                                                <Link to={'#'}>{item.naziv}</Link>
                                                <div className="dropdown-content">
                                                        <li><Link to={'#'}>Split</Link></li>
                                                        <li><Link to={'#'}>Solin</Link></li>
                                                        <li><Link to={item.link}>Kaštela</Link></li>
                                                        <li><Link to={'#'}>Trogir</Link></li>
                                                </div>
                                            </li>
                                        );
                                    
                                    
                                    return(

                                       
                                            

                                        <li key = {index}><Link to={item.link}>{item.naziv}</Link></li>
                                        
                                    );
                                })
                            }                           
                                        
                        </ul>
                    </div>
                    

                    <div id="nav_bar">
                        <div className="hamburger">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            <p className="menu_text">Menu</p>
                        </div> 
                       
                        <div className="book_symbol"></div>
                    </div>
                </Headroom>
                
          
            
        </div>
        );
    }
}

export default Header;