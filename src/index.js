import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//jsx语法
//<App /> js普通对象

// let app = <App />;
// let root = document.getElementById('root');
//
// let h1 = <h1>hello world</h1>;
//
// ReactDOM.render(h1,root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//实现页面时刻的显示

// function clock(){
//     let time = new Date().toLocaleTimeString()
//     let element = (
//         <div>
//             <h1>现在的时间是{time}</h1>
//             <h2>这是副标题</h2>
//         </div>
//     )
//     let root = document.querySelector("#root")
//     ReactDOM.render(element,root)
// }
// setInterval(clock,1000)


//react 函数式组件
function Clock(props){
    return (
        <div>
            <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
            <h2>这是副标题</h2>
        </div>
    )
}

function run(){
    let root = document.querySelector('#root')
    ReactDOM.render(<Clock date={new Date()}/>,root)
}

setInterval(run,1000)

