import react, {Component} from 'react';
import {connect} from 'react-redux';
import {removedCharacterById} from './../action/index';

class HeroList extends Component{
    render(){
        return(
            <div>
                <h2>Hero List</h2>
                <ul className="list-group">
                    {
                        this.props.heros.map(hero=>{
                            return (
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">{hero.name}</div>
                                    <div className="list-item right-button" onClick={()=>this.props.removedCharacterById(hero.id)}>x</div>
                                </li>
                            )
                        })
                    }
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

export default connect(mapStateToProps, {removedCharacterById})(HeroList)


