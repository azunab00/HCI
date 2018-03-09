import React, {Component} from 'react'
import GKInfo from './GKInfo.jsx'
import data from '../data.json'



class Homepage extends Component{

    render(){

        let content = data.homepage_content;
        let visual = data.visual_content;
    
        return(
            <div className="smooth_transition">
                <div className="pocetna">
                    <div className="title_container">
                        <div className="title_wrapper">
                            <h1 className="smooth_move">{content.naslov}</h1>
                        </div>
                    </div> 

                
                    <div className="about">

                        <div className="visual_info">

                            {
                                data.visual_content.map(function(item,index){
                                    return(
                                        <div className="element">
                                            <div className="element_img" style = {{backgroundImage: 'url(' + require(`../images/${item.pic}`) + ')'}}></div>
                                            <p>{item.text}</p>
                                        </div>
                                    );
                                })
                            }

                        </div>
                    </div>
                


                    {
                        data.homepage_content.knjiznice.map(function (item, index){
                            return(
                            
                                <GKInfo 
                                key = {index}
                                kontejner = {item.kontejner} 
                                naslov = {item.naslov} 
                                opis = {item.opis} 
                                slika = {require(`../images/${item.slika}`)}
                                mreza = {item.mreza}></GKInfo>
                            
                            );
                        })
                    }
                

                </div>
            </div>
        );
    }
}

export default Homepage;