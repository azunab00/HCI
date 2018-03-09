import React, {Component} from 'react'
import Media from "react-media"

class NewsCard extends Component{

    constructor(props){
        super(props);
        this.onExpandNews = this.onExpandNews.bind(this);
        this.onHideNews = this.onHideNews.bind(this);
        this.state = {newsDisplay: 'none', showButton: 'block', hideButton: 'none'};
      
    }
  

    onExpandNews(event){
      
            this.setState({newsDisplay: 'flex', showButton: 'none', hideButton: 'block'})
      
    }

    onHideNews(event){
   
            this.setState({newsDisplay: 'none', showButton: 'block', hideButton: 'none'})
    }


    render(){
        
       
        const {slika, naslov, podnaslov, botun, opis, datum, sat, lokacija} = this.props;

        var background = {
            backgroundImage: 'url(' + slika + ')',
        }

        return(
  
            <div className="news">
                <div className="news_image_container" style={background}>
                    <h3>{naslov}</h3>
                </div>
                <Media
                    query="(max-device-width: 768px)"
                    render={() => 
                        <div>
                            <button onClick = {(this.onExpandNews)} className ="news_button" style = {{display: this.state.showButton}}>{botun}</button>
                            <div className="expand smooth_transition" style ={{ display: this.state.newsDisplay}}>
                                <div className ="when_and_where">
                                    <i className="fa fa-clock-o" aria-hidden="true"> {sat}</i>
                                    <i className="fa fa-calendar" aria-hidden="true"> {datum}</i>
                                    <i className="fa fa-map-marker" aria-hidden="true"> {lokacija}</i>
                                </div>
                                <p>{opis}</p>
                            </div>
                            <button onClick = {(this.onHideNews)} className = "hideButton" style = {{display: this.state.hideButton}}>Sakrij</button>
                        </div>
                        
                    }
                    
                />

                <Media
                    query = "(min-device-width: 768px)"
                    render = {() =>
                        <div className="expand">
                            <div className ="when_and_where">
                                <i className="fa fa-clock-o" aria-hidden="true"> {sat}</i>
                                <i className="fa fa-calendar" aria-hidden="true"> {datum}</i>
                                <i className="fa fa-map-marker" aria-hidden="true"> {lokacija}</i>
                            </div>
                            <p>{opis}</p>
                        </div>
                    
                    }
                   
                />
               
               
            </div>
    
        );
    }
}

export default NewsCard;