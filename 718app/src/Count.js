// 2020, 7/18, am 10:30-11:05

import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {count: 0};
        this.countOn = this.countOn.bind(this);
    }

    countOn(){
        this.setState( 
            {count: 10}
    );}

    render(){

        return(
            <div>
                <button onClick = {this.countOn}>
                    you got {this.state.count} kisses from Poupou.
                </button>
            </div>
        );
    }
}

export default Counter;