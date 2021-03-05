import react, { Component } from 'react';
import {connect} from 'react-redux';

class SquadStats extends Component {
    getStrength(){
        let strength = 0;
        this.props.heros.map(i=>{
            strength = strength+i['strength']
        })
        return strength;
    }
    getPower(){
        let strength        = 0;
        let intelligence    = 0;
        let speed           = 0
        for(let i in  this.props.heros){
            strength        += this.props.heros[i].strength
            intelligence    += this.props.heros[i].intelligence
            speed           += this.props.heros[i].speed
        }
        return {strength,intelligence,speed};
    }
    render(){
        let power = this.getPower();
        console.log(power)
        return(
            <div>
                <h2>Squad Stats</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                    <b>Overall Strength:</b> {power.strength}
                    </li>
                    <li className="list-group-item">
                    <b>Overall Intelligence:</b> {power.intelligence}
                    </li>
                    <li className="list-group-item">
                    <b>Overall Speed:</b> {power.speed}
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
      heros : state.heroReducers
    }
}

export default connect(mapStateToProps, null)(SquadStats)