import React, {Component} from 'react'
import GifListContainer from '../containers/GifListContainer'

class GifList extends Component{
    render(){
        console.log(this.props.gifs)
        return(
            <ul>
                {this.props.gifs.map(g => <li key={g.id}><img src={g.images.original.url}></img></li>)}
            </ul>
        )    
    }
}

export default GifList