import React, {Component} from 'react'
import NewsCard from './NewsCard.jsx'
import data from '../data.json'
import TitleSeparator from './TitleSeparator.jsx'

class News extends Component{ 


    render(){

  
        return(
            <div className="smooth_transition">
                <TitleSeparator naslov = {data.title_separator_content.news}/>
                <div className="news_container">
                    
                    {

                        data.news_content.kartice.map(function(item, index){
                            return(
                                <NewsCard 
                                key = {index}
                                slika = {require(`../images/${item.slika}`)}
                                naslov = {item.naslov}
                                podnaslov = {item.podnaslov}
                                botun = {item.botun}
                                opis = {item.opis}
                                datum = {item.datum}
                                sat = {item.sat}
                                lokacija = {item.lokacija}
                                />
                            );
                        })
                    }
                    </div>
                
            </div>
        );
    }
}

export default News;