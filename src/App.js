import React, { Component, Fragment } from 'react';
import './App.css';
// #7
class App extends Component {
  render(){
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    }

    return (
      // <div style={style} className="App">
      <div className="App">
        안녕하세요~
      </div>
    )
  }
}

// #6 
// class App extends Component {
//   render(){
//     const name = "Robert!!";
//     const value = 2;
//     return (
//       <div>
//         hello {name}
        
//         {/* && 사용해서 true인것만 표현 */}
//         { name === 'velopert!!' && <div>벨로퍼트다!!</div>} 

//         { name === 'Robert!!' ? '아이언맨이닷!' : '너는 누구냐!!'}


//         {/* 조건이 여러개일 경우 */}
//         {
//           (
//             function() {
//             if (value === 1) return <div>아이언맨 ???</div>
//             if (value === 2) return <div>벨로퍼트 ???</div>
//             if (value === 3) return <div>누구 ???</div>
//             return <div>모르겠네...</div>
//             }
//           )()
//         }

//         {/* 조건이 여러개일 경우 , 화살표 함수 사용 (바로 실행하는거니까 끝에 () 꼭 붙여주기) 
//             this, arguments, super 개념이 없음!!!
//         */}
//         { 
//           (
//             () => {
//             if (name === 'Robert!!') return <div>아이언맨 ???</div>
//             if (name === 'velopert!!') return <div>벨로퍼트 ???</div>
//             if (name === 'Stave!!') return <div>누구 ???</div>
//             }
//           )()
//         }

//       </div>
//     );
//   }
// }

export default App;


// var    : 스코프가 함수 단위, 더이상 never,,,
// const  : 스코프가 블록 단위, 한번 선언 후 고정적인 값
// let    : 스코프가 블록 단위, 유동적인 값

// 삼항연산자로 데이터 구하기, if 사용 안함, switch 사용 가능. 
// 조건이 많으면 외부에서 하도록 하라...
