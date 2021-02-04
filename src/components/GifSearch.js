import React, {Component} from 'react'
import GifListContainer from '../containers/GifListContainer'

class GifSearch extends Component{

    state={
        keyword: ""
    }

    handleChange = (e) => {
        this.setState({keyword: e.target.value})
    }
    
    render(){
        return(
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.handleSubmit(this.state.keyword)}
            }>
                <label>Gifphy Keyword Search: </label>
                <input onChange={this.handleChange} name="keyword"></input>
                <input type="submit" />
            </form>
        )
    }
}

export default GifSearch