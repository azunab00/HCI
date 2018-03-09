import React, {Component} from 'react'
import data from '../data.json'


class LibraryCard extends Component{

    constructor(props){
        super(props)
        this.onInfoShow = this.onInfoShow.bind(this);
        const matches = window.matchMedia('(max-device-width: 768px').matches

        var up = document.createElement('i');
        up.className = "fa fa-caret-up fa-4x"

        var down = document.createElement('i');
        down.className = "fa fa-caret-down fa-4x"

        if(matches)
            this.state = {show: {display: 'none'}, library: this.props.ime_knjiznice, element1: up, element2: down};
        else
            this.state = {show: {display: 'flex'},  library: this.props.ime_knjiznice, element1: up, element2: down};
        
    }


    onInfoShow(event){
        if(this.state.show.display === "none"){
            this.setState({show: {display: 'flex'}});
            var parent = document.getElementById(this.state.library);
            var child = parent.childNodes[0];
            parent.replaceChild(this.state.element1,child);
        
        }
            

        else{
            this.setState({show: {display: 'none'}});
            var parent = document.getElementById(this.state.library);
            var child = parent.childNodes[0];
            parent.replaceChild(this.state.element2,child);
        }
           

    }

    render(){

        const { slika, ime_knjiznice, sadrzaj_adr, sadrzaj_kont, sadrzaj_em, sadrzaj_radn, sadrzaj_radn_novired, html } = this.props;

        function createMarkup() { 
            return {__html: '<iframe src=' + html + 'width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'}; };
        
        var background = {
            backgroundImage: 'url(' + slika + ')',
            backgroundSize: 'cover'
        }

        var content = data.libraries_content;

        return(
            <div>
                <div onClick = {this.onInfoShow} className="library_button">
                    <p className="library_name">{ime_knjiznice}</p>
                    <div id = {ime_knjiznice}>
                        <i className="fa fa-caret-down fa-4x" aria-hidden="true"></i>
                    </div>
                </div>

                <div style = {this.state.show} className="library_info_container smooth_transition">
                    <div className="library_info">
                        <div className="library_image" style={background}></div>
                        <div>
                            <h3>{ime_knjiznice}</h3>
                            <p><b>{content.adresa}</b>{sadrzaj_adr}<br/>
                            <b>{content.kontakt}</b>{sadrzaj_kont}<br/>
                            <b>{content.email}</b>{sadrzaj_em}<br/>
                            <b>{content.radnovr}</b>{sadrzaj_radn}<br/>
                            {sadrzaj_radn_novired}</p>
                        </div>
                    </div>
                    <div className="map-responsive">
                        <div dangerouslySetInnerHTML={createMarkup()} /> 
                    </div>
                </div>
            </div>
        
        );
    }
}

export default LibraryCard;