
//import React,{Component} from 'react'
//import ReactDOM from 'react-dom'

// class Hello extends React.Component{
//     render(){
//         return(
//             <div className = 'message-box'>
//                 hi {this.props.name}
//             </div>
//         )    
//     }
// }
// ReactDOM.render(<Hello />,document.body)

//<AlertBox>
//    <h1>You have pending notifications</h1>
//</AlertBox>    

//class AlertBox extends Component{
//    render(){
//        return(
//            <div className='alert-box'>
//                {this.props.children}
//            </div>    
//        )
//    }
//}

//class Hello extends Component{
    
//}

//constructor(props) {
//    super(props)
//    this.state = { username: undefined }
//  }
//  this.setState({ username: 'rstacruz' })
//  render () {
//    this.state.username
//    const { username } = this.state
//    ···
//  }

//<Video fullscreen = {true} autoplay = {false} />

//render(){
//    this.props.fullscreen
//    const{ fullscreen,autoplay } = this.props
//}

//import React,{Component,Fragment} from 'react'
//class Info extends Component{
//    render(){
//        const { avatar, username } = this.props
//        return(
//            <Fragment>
//                <UserAvatar src={avatar} />
//                <UserProfile username={username}/>
//            </Fragment>
//        )
//    }
//}

//Hello.defaultProps = {  设置props默认值
//    color:'blue'
//}

//class Hello extends Component {
//    constructor(props){
//        super(props)
//        this.state = { visible:true }
//    }
//}
//class Hello extends Component{
//    state = { visible:true }
//}

//function MyComponent ({ name }){
//    return (
//        <div className = 'message-box'>
//            Hello {name}
//        </div>
//    )
//}

// import React,{PureComponent} from 'react'

// class MessageBox extends PureComponent{

// }

// this.forceUpdate()
// this.setState({})
// this.setState(state =>{})

// this.state
// this.props

// import { createStore } from 'redux'

// function counter (state = { value: 0 }, action) {
//     switch (action.type) {
//     case 'INCREMENT':
//       return { value: state.value + 1 }
//     case 'DECREMENT':
//       return { value: state.value - 1 }
//     default:
//       return state
//     }
//   }

//   let store = createStore(counter)

//   let store = createStore(counter,{ value:0 })

//   export default connect (
//       (state) => ({
//           message:state.message
//       }),
//       (dispatch)=>({
//           onMessageClick:(message) => {
//               dispatch({type:'click',message})
//           }
//       })
//   )
//import {default as Router,Route} from 'react-router'

// router
// path name component redirect  Routes route
// component:()=>import('')

//fetchData = (url) => (dispatch,getState)=>{

//}

// imr	Import React
// imrc	Import React / Component
// impt	Import PropTypes
// impc	Import React / PureComponent
// cc	Class Component
// ccc	Class Component With Constructor
// sfc	Stateless Function Component
// cdm	componentDidMount
// cwm	componentWillMount
// cwrp	componentWillReceiveProps
// gds	getDerivedStateFromProps
// scu	shouldComponentUpdate
// cwu	componentWillUpdate
// cdu	componentDidUpdate
// cwu	componentWillUpdate
// cdc	componentDidCatch
// gsbu	getSnapshotBeforeUpdate
// ss	setState
// ssf	Functional setState
// ren	render
// rprop	Render Prop
// hoc	Higher Order Component
// import React, { Component } from 'react';

// class Parent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             post:""
//          };
//     }
//     changeChildCont = cont =>{
//         this.setState({
//             post:cont
//         });
//     }
//     render() { 
//         return ( 
//             <div>
//                 <div>父组件</div>
//                 <div>职位：{this.state.post}</div>
//                 <Child childCont={this.changeChildCont}></Child>
//             </div>     
//          );
//     }
// }
 
// export default Parent;

// class Child extends Component {
//     handleChange = e =>{
//         this.props.childCont(e.target.value);
//     }
//     render() { 
//         return ( 
//             <div>
//                 <div>子组件</div>
//                 <input type="text" onChange={this.handleChange}/>
//             </div>
//          );
//     }
// }
 
// let obj = {
//     add:function(val){
//         return val+10;
//     },
//     name:'I am Jspang'
// };

// console.log(obj.add(100));
// console.log(obj.name);

// var pro = new Proxy({
//     add:function(val){
//         return val+10;
//     },
//     name:'I am Jspang'
// },{
//     get:function(target,key,property){
//         console.log('come in get');
//         return target[key];
//     },
//     set:function(target,key,value,receiver){
//         console.log(` setting${key} = ${value} `);
//         return target[key] = value;
//     }
// });
// console.log(pro.name)
// pro.name = '技术'
// console.log(pro.name)
// i deng you deng the so zhaoji

import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            error:null,
            isLoaded:false,
            items:[]
         };
    }
    componentDidMount() {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        itmes:result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() { 
        const { error, isLoaded,items } = this.state;
        if(error){
            return <div>Error:{error.message}</div>
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return ( 
                <ul>
                    {items.map(item => (
                        <li key={item.name}>

                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
             );
        }
    }
}

class Foo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('click happend')
    }
    render() { 
        return ( 
            <button onClick={this.handleClick}> Click Me </button>
         );
    }
}

class Fun extends Component{
    handleClick = () => {
        console.log('Click happend');
    }
    render(){
        return<button onClick={this.handleClick}> Click Me </button>
    }
}

class Func extends Component{
    handleClick(){
        console.log('Click happend')
    }
    render(){
        return(
            <button onClick={this.handleClick.bind(this)}Click Me></button>
        )
    }
}
//Function.prototype.bind每次组件渲染时，在渲染中使用都会创建一个新函数，这可能会影响性能

class Foo extends Component{
    handleClick(){
        console.log('Click happend');
    }
    render(){
        return <button onClick={()=>this.handleClick()}>Click Me</button>
    }
}

//在渲染中使用箭头函数会在每次组件渲染时创建一个新函数，这可能会破坏基于严格身份比较的优化

const A = 65

class Alphabet extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)    
        this.state = {
            justClicked:null,
            letters:Array.from({length:26},(_,i) => String.fromCharCode(A + i))
        };
    }
    handleClick(letter){

    }
    render(){
        return (
            <div>
                Just clicked: {this.state.justClicked}
                <ul>
                    {this.state.letters.map(letter => 
                        <li key={letter} onClick={() => this.handleClick(letter)}>
                            {letter}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

class Alph extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { 
            justClicked:null,
            letters:Array.from({length:26},(_,i) => String.fromCharCode(A + i))
         }
    }
    render() { 
        return ;
    }
}
 
export default Alph;
