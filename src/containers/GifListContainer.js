import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{
    state ={
        gifs: []
    }

    handleSubmit = (keyword) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&limit=3&api_key=Yrylc28ZVZwhgeG0v6oPmdhshfvP0S5n&rating=g`)
        .then(res => res.json())
        .then(apiData => this.setState({gifs: apiData.data}))
    }

    render(){
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer