import React, {Component} from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class GKInfo extends Component{

    constructor(props) {
        super()
    }

    render(){

        const { kontejner, naslov, opis, slika, mreza} = this.props;
        return(
            <div className={kontejner}>
               
                <div className="wrapper">
                        <h3 class ="new smooth_transition">{naslov}</h3>                 
                    <p>{opis}<br/><b>{mreza}</b></p>
                    <img src={slika} alt = "library"/>
                </div>
                    
                
                
          
            </div>
        );
    }
}

export default GKInfo;
