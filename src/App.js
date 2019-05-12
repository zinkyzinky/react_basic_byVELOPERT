import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 1,
    error: false    // componentDidCatch() 적용하면 그냥 흰 화면이 나오니까! 안내위해서~ 
  }

  componentDidCatch(error, info) {
    console.log(error); // 어떤 에러가 발생한지
    console.log(info);  // 어디서 발생한지 

    this.setState({
      error: true,
    });
    // or API 통해서 서버로 오류 내용 날리기 를 하거나...? 
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect());
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render(){
    if (this.state.error) {
      return (
        <div>에러가 났어요!!!!!</div>
      )
    }
    return (
      <div ref={ref => this.myDiv = ref}>
          {/* && 사인은 이 조건이 만족하면 뒷 작업을 보여줘라! 라는 의미 */}
          {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
          {/* <MyComponent value={this.state.counter} /> */}
          <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default App;
