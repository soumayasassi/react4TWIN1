import React, { Component } from 'react';
import Child from './Child';

class Home extends Component {
    constructor(props) {
        super(props);
    }

     changeState  = () => {

        this.setState(

            {txt : "Bonjour tout le monde" , 
                count : this.state.count +1 , 
                departs : [... this.state.departs , {id : 4 , nom : "Télécom"}]

            }
        ) ; 
     }
    state = { 
        txt: "montxt"  , 
        count : 1 , 
        departs : [ {id:1, nom:'Informatique'}, {id:2, nom:'Génie Civil'}, {id:3, nom:'Génie Mécanique'}, ]
     }

     
    render() { 
        return ( <> 
        
        {/*{this.state.txt} <br></br>
        {this.state.count}
        {this.state.departs.map((d)=><li key={d.id}>{d.nom}</li>)}
        <button onClick={this.changeState}> Change State</button>*/}
        <Child msg={"Hello from your parent"} num={5}></Child>
        </> );
    }
}
 
export default Home;