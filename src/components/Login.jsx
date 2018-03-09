import React, {Component} from 'react'
import TitleSeparator from './TitleSeparator.jsx'
import data from '../data.json'
import slika from '../images/books.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {Redirect} from 'react-router-dom' 


class Login extends Component{

    constructor(){
        super()

        this.onNameChange = this.onNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state = {
            usrname: '',
            password: '',
            auth: sessionStorage.getItem('MyData'),
            visibiliy: {display: 'none'}
        }
        
        
    }
   
    

    onNameChange(event){
        this.setState({usrname: event.target.value});
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
       
    }

    onSubmit(event){

        var passwordHash = require('password-hash');

        if(passwordHash.verify(this.state.password, data.account_data.password) && this.state.usrname === data.account_data.username){
            sessionStorage.setItem('MyData', "true");
            this.setState({auth: "true"})
        }
        else
            this.setState({visibiliy: { display: 'block'}})
        
    
        
    }

    render(){

        var content = data.login_content;

      
        if(this.state.auth === "true"){
            return(
                <Redirect to = 'mybooks'/>
            );
        }

        else
            return(
               
                <div className="smooth_transition">
                    <div className="prijava">
                        
                        <TitleSeparator naslov = {data.title_separator_content.login}/>
                        <p style = {this.state.visibiliy} className = "error">Netočna lozinka ili korisničko ime. Pokušajte ponovno.</p>
                        <div className="book_icon">
                            <img src = {slika} alt="slika"/>
                        </div>
                        <p className="description">{content.opis}</p>
                        <div className="text_nd_password">
                            <input onChange = {this.onNameChange} type="text" name="username" placeholder="Username"/><br/>
                            <input onChange = {this.onPasswordChange} type="password" name="lname" placeholder="Password"/><br/>
                            <button onClick = {this.onSubmit} type="submit">{content.botun}</button>
                            <div className="additional_links">
                                <p>{content.zaboravljena_lozinka}</p>
                                <p>{content.registracija}</p>
                            </div>
                        </div>
                    </div>

                </div>

                
            );
    }
    
}

export default Login;