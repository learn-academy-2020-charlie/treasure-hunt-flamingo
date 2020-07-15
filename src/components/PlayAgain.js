import React, { Component } from 'react'

class PlayAgain extends Component{

    reset = () => {
        this.props.resetValues()
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <button onClick = { this.reset}>
                        Click to Restart!
                    </button>
                </div>
            </React.Fragment>
        )
    }
}
export default PlayAgain