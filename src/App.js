import React, { Component, Fragment } from 'react';

class App extends Component {
  render(){
    return (
      // 반드시 JSX 문법으로 return 해줘야 함.

      // 묶어줘야 에러가 발생하지 않음.
      // <div>안녕하세요 리액트</div>
      // <div>반갑습니다!!!!</div>

      // <div>
      //   <div>안녕하세요 리액트</div>
      //   <div>반갑습니다!!!!</div>
      // </div>

      // 요소 검사에서 보이지 않음 (Fragment)
      <Fragment>
        <div>안녕하세요 리액트</div>
        <div>반갑습니다!!!!</div>
      </Fragment>

    );
  }
}

export default App;
