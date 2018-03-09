import React, {Component} from 'react'
import TitleSeparator from './TitleSeparator.jsx'
import data from '../data.json'
import GeneralInfo from './GeneralInfo.jsx'
import LibraryCard from './LibraryCard.jsx'


class Libraries extends Component{


    render(){

        let general = data.libraries_content.kastela;
        

     

        return(
            <div className="smooth_transition">
                <div className="knjiznice">
                    <div className="container">
                        <TitleSeparator naslov = {data.title_separator_content.libraries}/>
                    </div>
                    
                    
                    <div className="general_library_info">
                    
                        <p><b>{general.naslov}</b><br></br>{general.opis}<br></br></p>
                
                        <GeneralInfo/>

                    </div>
                    
                
                    {
                        data.libraries_content.kastela.lista_kastela.map(function(item,index){
                            return(
                            
                                <LibraryCard
                                key = {index}
                                ime_knjiznice = {item.ime}
                                slika = {require(`../images/${item.slika}`)}
                                sadrzaj_adr = {item.sadrzaj_adr}
                                sadrzaj_kont = {item.sadrzaj_kont}
                                sadrzaj_em = {item.sadrzaj_em}
                                sadrzaj_radn = {item.sadrzaj_radn}
                                sadrzaj_radn_novired = {item.sadrzaj_radn_novired}
                                html = {item.html}
                                />
                            );
                        })
                    }
                 
                    


                </div>
            </div>

        );
    }

}
export default Libraries;