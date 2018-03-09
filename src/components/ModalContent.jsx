import React, {Component} from 'react'

class ModalContent extends Component{

    constructor(props){
        super()
    }

    render(){
        const{modalContent}=this.props;
        let slika = require(`../images/${modalContent.slika}`)

        var background = {
            backgroundImage: 'url(' + slika + ')',
            backgroundSize: '100% 100%'
        }
     
        return(

            <div>
                
                <div className = "upper_content">
                    <div className = "picture" style = {background}></div>
                    <p><b>{modalContent.naslov}</b><br></br><b>{modalContent.broj_stranica}</b><br></br><b>{modalContent.žanr}</b><br></br><br></br>{modalContent.sadržaj}</p>
                </div>
                <div className = "lower_content">
                    <div>
                        <p><b>Dostupna u knjižnicama:</b> </p>
                        {
                            modalContent.knjiznice.map(function(item,index){
                                return(
                                    <p key = {index}>{item}</p>
                                );
                            
                            })
                               
                        }
                    </div>

                    <div>
                        <p><b>Dostupna u prodaji:</b> </p>
                        {
                            modalContent.prodaja.map(function(item,index){
                                return(
                                    <p key = {index}><a target="_blank" href={item.link}>{item.text}</a></p>
                                );
                            })
                        }
                    </div>

                    <button>{modalContent.botun}</button>
                    
                    
                </div>
            
            </div>

        );
    }


}

export default ModalContent;