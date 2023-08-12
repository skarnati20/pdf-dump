import { React, Component } from 'react'

class OutputBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="output-container">
                <h1>OutputBox</h1>
                <p>Here is the output box</p>
            </div>
        );
    }
}

export default OutputBox;