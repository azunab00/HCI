import React, {Component} from 'react'
import TitleSeparator from './TitleSeparator.jsx'
import data from '../data.json'
import BookCard from './BookCard.jsx'


class BookSearch extends Component{


    render(){


        return(
            <div className="smooth_transition">
                <div className="katalog">

                    <TitleSeparator naslov = {data.title_separator_content.book_search}/>
                    
                    <div className = "search_input_container">
                        <input className="search_input" type="search" name="search" placeholder="naslov, autor, knjižnica, žanr..."/><br/>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>

                    <div className="books_container">

                        {
                            
                            data.booksearch_content.map(function(item, index){
                                return(
                                   
                                    <BookCard 
                                    key = {index}
                                    cardContent = {item}/>
                                );
                            })
                        }

                    </div>
                    
                   

                </div>
            </div>
            
        );
    }
}

export default BookSearch;