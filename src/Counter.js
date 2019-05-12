import React, { Component } from 'react';

class Counter extends Component {

    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        this.handleIncreate = this.handleIncreate.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    // this 를 모름!!!
    // 혹여나 사용하고 싶으면 위의 constructor 선언해줘야 함.
    // handleIncreate() {
    //     console.log(this);
    //     this.setState({
    //         number: this.state.number
    //     })
    // }

    // 화살표 함수를 한 이유! 하지 않으면 this를 알기 어렵다. 소스가 복잡해짐

    handleIncreate = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number} </div>
                <button onClick={this.handleIncreate}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;