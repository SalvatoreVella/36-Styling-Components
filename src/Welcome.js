import React from "react";
import Age from "./Age";


export default class Welcome extends React.Component {
    static defaultProps = {
        name: "Gianmai",
    }
    render() {
        return (
            <div className="welcome">
                <h1>Hello, {this.props.name}!</h1>
                <Age age={this.props.age}/>
            </div>
        )
    }
}