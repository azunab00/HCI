import React, {Component} from 'react'
import Modal from 'react-modal'
import ModalContent from './ModalContent.jsx'
import Media from "react-media"


class BookCard extends Component{

    constructor(props){
        super(props)

        this.onModalOpen = this.onModalOpen.bind(this);
        this.onModalClose = this.onModalClose.bind(this);

        let i;
        let full = [];
        var empty = [];
        for(i = 0; i < parseInt(this.props.cardContent.ocjena,10); i++)
           full.push(i)
       
        for(i = i; i < 5; i++){
            empty.push(i)
        }

        
        
        this.state = {isActive: false, fullStars: full, emptyStars: empty};
    }
    
    onModalOpen(event){
        this.setState({isActive:true});
    }

    onModalClose(event){
        this.setState({isActive: false});
    }


    render(){

        const {cardContent} = this.props;

        const mobileStyles = {
            content : {
              top: '53%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform:'translate(-50%, -50%)',
              height: '75em',
              width:'45em'
            },
            overlay : {
                backgroundColor   : '#00000094'
              },
          };
          const desktopStyles = {
            content : {
              top: '55%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform:'translate(-50%, -50%)',
              width:'45em',
              overflowX: 'hidden'
            },
            overlay : {
                backgroundColor   : '#00000094'
              },
          };

      
        let slika = require(`../images/${cardContent.slika}`)
       
        let background = {
            backgroundImage: 'url(' + slika + ')',
        }
 
        Modal.setAppElement(document.body);

        return(
            <div>
                <div className="book smooth_jump" onClick = {(this.onModalOpen)}>
                    <div className="book_image_container" style={background}></div>
                    <div className="info_container">
                        <p className="book_title">{cardContent.naslov}</p>
                        <div className="stars_container">
                           {
                                this.state.fullStars.map(function(index){
                                    return(
                                        <i className="fa fa-star" aria-hidden="true" key = {index} ></i>
                                    );
                                })
                           }
                                                          
                            {
                                this.state.emptyStars.map(function(index){
                                  return(
                                    <i className="fa fa-star-o" aria-hidden="true" key = {index}></i>
                                  );
                              })
                            }
                                                    
                        </div>
                    </div>
                </div>

                <Media
                    query="(min-device-width: 768px)"
                    render={() =>
                    
                        <Modal isOpen = {this.state.isActive} style = {desktopStyles}>

                            <div className="modal_exit" onClick = {(this.onModalClose)} >
                                <i className="fa fa-times" aria-hidden="true" ></i>
                            </div>

                            <ModalContent modalContent = {cardContent}/>
                    
                         </Modal>
                    
                    
                     } />

                <Media
                
                    query="(max-device-width: 768px)"
                    render={() =>
                
                        <Modal isOpen = {this.state.isActive} style = {mobileStyles}>

                            <div className="modal_exit" onClick = {(this.onModalClose)} >
                                <i className="fa fa-times" aria-hidden="true" ></i>
                            </div>

                            <ModalContent modalContent = {cardContent}/>
                    
                        </Modal>
            
            
                }/>
               
                  
               
            </div>
        );
    }
}

export default BookCard;