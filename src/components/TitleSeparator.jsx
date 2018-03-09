import React, {Component} from 'react'

class TitleSeparator extends Component{

    constructor(props){
        super()
    }
    render(){

        const {naslov} = this.props;

        return(
            <div>
                <hr className="menu_title_separator"/>
                <p className="menu_title">{naslov}</p>
                <hr className="menu_title_separator"/>
            </div>
           
        );
    }


}

export default TitleSeparator;