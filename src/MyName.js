import React, { Component } from 'react';

// class MyName extends Component {

//     static defaultProps = {
//         name: 'Robert John Downey Jr.'
//     }
//     render() {
//         return (
//             <div>
//                 안녕하세요 ! 제 이름은 <b>{this.props.name}</b>입니다.
//             </div>
//         )
//     }
// }


const MyName = ({ name }) => {
    return <div> 안녕!! 나는 { name } 이라고 햇! </div>
};

MyName.defaultProps = {
    name: 'Robert John Downey Jr.'
};


// MyName.defaultProps = {
//     name: 'Robert John Downey Jr.'
// }

export default MyName;