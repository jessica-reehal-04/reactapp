import { Component } from "react";

export default class Counter extends Component {

    state={
        count:0
    }
    increment = () => {
        this.setState((p)=>{
            return{
                count:p.count+1
            };
        });
    };

    decrement=()=>{
        this.setState((p)=>{
            return{
                count:p.count-1
            };
        });
    };

    reset=()=>{
        this.setState((p)=>{
            return{
                count:0
            }
        })
    }

    render() {

        return (
            <div>
                Value: {this.state.count}
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}