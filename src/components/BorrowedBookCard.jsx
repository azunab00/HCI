import React, {Component} from 'react'
import data from '../data.json'

class BorrowedBookCard extends Component{

    constructor(props){
        super(props)
        const {datum} = this.props;
        this.onExpandDate = this.onExpandDate.bind(this);
        this.onRemind = this.onRemind.bind(this);
        this.state = {dan: datum.dan, mjesec: datum.mjesec, godina: datum.godina, botun:{}}
    }
    
    onRemind(event){
        this.setState({botun: {backgroundColor: 'gray', boxShadow: '0 0 0 white'}})
    }

    onExpandDate(event){
        let dan = parseInt(this.state.dan,10);
        let mjesec = parseInt(this.state.mjesec,10);
        let godina = parseInt(this.state.godina,10);
        let zbroj = dan + 15;
        if(zbroj > 30){
            let prvi = 30 - dan;
            let drugi = 15 - prvi;
            mjesec = mjesec + 1;
            if(mjesec > 12) {
                mjesec = 1; 
                godina = godina + 1;
            }
            this.setState({dan: drugi, mjesec: mjesec, godina })
        }
        else
            this.setState({dan: zbroj})
    }

    render(){

        const { slika, naslov, lokacija } = this.props;
       
        let background = {
            backgroundImage: 'url(' + slika + ')',
        }

        let content = data.mybooks_content;

        return(
            <div className="borrowed_book_container">
                <div className="borrowed_book_image"  style={background}></div>
                <div className="borrowed_book_info">
                    <p className="borrowed_book_title"><b>{naslov}</b></p>
                    <p><b>{content.labela_posuđeno}</b>{lokacija}</p>
                    <p><b>{content.labela_datum}</b>{this.state.dan}.{this.state.mjesec}.{this.state.godina}.</p>
                    <div className="buttons">   
                        <button onClick = {this.onRemind} style = {this.state.botun}>{content.podsjeti}</button>
                        <button onClick = {this.onExpandDate} >{content.produži}</button>
                    </div>
                    <p>{content.ocijeni}</p>
                    <div className="filling_star_container">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default BorrowedBookCard;