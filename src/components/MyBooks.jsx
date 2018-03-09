import React,{Component} from 'react'
import TitleSeparator from './TitleSeparator.jsx'
import BorrowedBookCard from './BorrowedBookCard.jsx'
import data from '../data.json'
import {Redirect} from 'react-router-dom'

class MyBooks extends Component{

    constructor(){
        super()
        this.onLogOut = this.onLogOut.bind(this);
        this.state = {auth: sessionStorage.getItem('MyData')}
       
    }

    onLogOut(event){
       
        sessionStorage.setItem('MyData', "false");
        this.setState({auth: "false"});
       
    }

    render(){        
        
        let links = data.mybooks_content;

        if(this.state.auth === "false"){
            return(
                <Redirect to = '/login'/>
            );
        }
       
       
        else
            return(
                <div className="smooth_transition">
                    <div className="moje_stanje">

                        <div className="options">
                            <p onClick = {this.onLogOut}>{links.odjava}</p>
                            <p>{links.clanstvo}</p>
                            
                        </div>

                        <TitleSeparator naslov = {data.title_separator_content.mybooks}/>
                        <div className = "borrowed_books">
                        {
                            data.mybooks_content.knjige.map(function(item, index){
                                return(
                                    <div key = {index}>
                                        <BorrowedBookCard
                                        slika = {require(`../images/${item.slika}`)}
                                        naslov ={item.naslov}
                                        lokacija = {item.lokacija}
                                        datum = {item.datum} />
                                    </div>
                                
                                );
                            })
                        }
                        </div>

                    </div>
                </div>
            );
    }
    
    
}

export default MyBooks;