import React,{Component} from 'react'
import data from '../data.json'


class Table extends Component{


    render(){

        return(
            <div>
                <div>
                    <ul>
                        {
                            data.libraries_content.general_info.clanarina.map(function(item, index){
                                if(index === 0)
                                    return(<li key = {index}><b>{item}</b></li>);
                                else
                                    return(<li key = {index}>{item}</li>);
                            })
                        }
                      
                    </ul>
                    <ul>
                        {
                            data.libraries_content.general_info.uvjeti_posudbe.map(function(item, index){
                                if(index === 0)
                                    return(<li key = {index}><b>{item}</b></li>);
                                else
                                    return(<li key = {index}>{item}</li>);
                            })
                        }
                    </ul>
                </div>
                
                <table>
                    <tbody>
                        
                            {
                                data.libraries_content.general_info.tablica.map(function(item,index){
                                    return(
                                        <tr key = {index}>
                                           {
                                               item.map(function(subitem, subindex){
                                                   if(index === 0)
                                                        return(<th key = {subindex}>{subitem}</th>);
                                                   else
                                                        return(<td key = {subindex}>{subitem}</td>);
                                               })
                                           }
                                        </tr>
                                    );
                                })
                               
                            }
                       
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;