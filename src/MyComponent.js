import React, { Component } from 'react';

class MyComponent extends Component {

    state = {
        value: 0
    };

    // 이건 static 으로 생성해야 한다.
    // 다음의 값, 현재 상태 값
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value === 10) return false; 
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== prevProps.value) {
            console.log('value의 값이 바뀌었다! ', this.props.value);
        }
    }

    componentWillUnmount() {
        console.log('Good Bye');
    }

    render() {
        return (
            <div>
                <p>props: {this.props.value} </p>
                <p>state: {this.state.value} </p>
            </div>
        )
    }
}

export default MyComponent;