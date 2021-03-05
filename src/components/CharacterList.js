import react, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addCharacterById} from './../action/index'

class CharacterList extends Component{
    
    render(){
        return(
            <div>
                <h2>Character List</h2>
                <ul className="list-group">
                    {
                        this.props.characters.map(char=>{
                            return (
                                <li key={char.id} className="list-group-item">
                                    <div className="list-item">{char.name}</div>
                                    <div className="list-item right-button" onClick={()=>this.props.addCharacterById(char.id)}>+</div>
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
    console.log('state>>>', state)
    return {
      characters : state.characterReducers
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);