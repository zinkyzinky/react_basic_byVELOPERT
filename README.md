This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# react_basic_byVELOPERT


### #5 ~ #7

var    : 스코프가 함수 단위, 더이상 never,,,
const  : 스코프가 블록 단위, 한번 선언 후 고정적인 값
let    : 스코프가 블록 단위, 유동적인 값

삼항연산자로 데이터 구하기, if 사용 안함, switch 사용 가능. 
조건이 많으면 외부에서 하도록 하라...

{/* && 사용해서 true인것만 표현 */}

```Shell
{ name === 'velopert!!' && <div>벨로퍼트다!!</div>} 

{ name === 'Robert!!' ? '아이언맨이닷!' : '너는 누구냐!!'}
```

{/* 조건이 여러개일 경우 */}

```Shell
{
(
    function() {
    if (value === 1) return <div>아이언맨 ???</div>
    if (value === 2) return <div>벨로퍼트 ???</div>
    if (value === 3) return <div>누구 ???</div>
    return <div>모르겠네...</div>
    }
)()
}
```

{/* 조건이 여러개일 경우 , 화살표 함수 사용 (바로 실행하는거니까 끝에 () 꼭 붙여주기) 
    this, arguments, super 개념이 없음!!!
*/}

```Shell
{ 
(
    () => {
    if (name === 'Robert!!') return <div>아이언맨 ???</div>
    if (name === 'velopert!!') return <div>벨로퍼트 ???</div>
    if (name === 'Stave!!') return <div>누구 ???</div>
    }
)()
}
```

### #8 Props

읽기 개념
모든 컴포넌트는 render()가 존재해야 한다.
부모 컴포넌트가 자식 컴포넌트에게 값을 넘겨줄 때 사용.

class 내부에 defaultProps 를 선언하는 것이 최신 문법

1. class 내부 선언

```Shell
class MyName extends Component {

    static defaultProps = {
        name: 'RRobert John Downey Jr.'
    }
    render() {
        return (
            <div>
                안녕하세요 ! 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        )
    }
}
```

2. class 아랫쪽


- 함수형 컴포넌트
  ({ name }) => 이것은 비구조 할당 문법
  함수형 컴포넌트는 초기 마운트 속도가 (미세하게) 빠름.
  메모리 자원도 적게 사용하는 편이라고 함!

```Shell
import React, { Component } from 'react';

const MyName = ({ name }) => {
    return <div> 안녕!! 나는 { name } 이라고 햇! </div>
};

MyName.defaultProps = {
    name: 'Robert'
};

export default MyName;
```
