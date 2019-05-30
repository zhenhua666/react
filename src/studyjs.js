 
  //unbeforunload() 页面刷新或关闭前触发的事件，可以禁止onunload事件的触发 
  //onunload是页面刷新或关闭后触发


/* const now = new Date().getTime();
//从缓存中获取用户上次推出的时间戳
const leaveTime = parseInt(localStorage.getItem('leaveTime'),10);
const refresh = (now - leaveTime) <= 5000;
alert(refresh ? '刷新':'重新登陆');

window.onunload = function(e){
    localStorage.setItem('leaveTime',new Date().getTime())
}

localStorage.setItem('myCat','Tom')

localStorage.getItem('myCat')

localStorage.removeItem('myCat')

localStorage.clear();

function bubbkeSort(nums){
  for(let i = 0; i < nums.length-1; i++){
    let mark = true;
    for(let j = 0; j < nums.length-i-1;j++ ){
      if(nums[j] > nums[j+1]){
        [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
        mark = false;
      }
    }
    if(mark) return 
  }
}

function bubbkeSort_twoWays(nums){
  let low = 0;
  let high  = nums.length - 1;
  while(low<high){
    let mark = true;
    for(let i = low; i<high;i++){
      if(nums[i]>nums[i+1]){
        [nums[i],nums[i+1]] = [nums[i+1],nums[i]]
        mark = false;
      }
    }
    high--;
    for(let j = high; j>low; j--){
      if(nums[j]<nums[j-1]){
        [nums[j],nums[j-1]] = [nums[j-1],nums[j]];
        mark = false;
      }
    }
    low++;
    if(mark) return;
  }  
} */


import React, { Component,Fragment } from 'react';
class MyComponent extends Component{
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }
  render(){
    return(
      <div ref={this.myRef} />
    )
  }
}
//当ref被传递给render中的元素时，对应节点的引用可以在ref的current属性中被访问
const node = this.myRef.current;

//ref会在componentDidMount或componentDidUpdate生命周期钩子触发前更新

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput(){
    this.textInput.current.focus();
  }

  render() { 
    return ( 
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
      </div>
     );
  }
}


class AutoFocusTextInput extends Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount(){
    this.textInput.current.focusTextInput();
  }
  render(){
    return(
      <CustomTextInput ref={this.textInput} />
    )  
  }
}

class CustomTextInput1 extends Component {
  constructor(props) {
    super(props);
    //this.state = {  }
      this.textInput = null;
      
      this.setTextInputRef = element =>{
        this.textInput = element;
      };
      this.focusTextInput = ()=>{
        if(this.textInput)this.textInput.focus();
      }
  } 

  componentDidMount(){
    this.focusTextInput();
  }

  render() { 
    return ( 
    <div>
      <input type="text" ref={this.setTextInputRef} />
      <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
    </div> 
    );
  }
}

class MouseTracker extends Component{
  constructor(props){
    super(props);
    this.state = {x:0,y:0};
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  
    handleMouseMove(event){
      this.setState({
        x:event.clientX,
        y:event.clientY
      })
    }
  
  render(){
    return(
      <div onMouseMove={this.handleMouseMove}>
        <h3>移动</h3>
        <p>origin({this.state.x},{this.state.y})</p>
      </div>
    )
  }
}

class Cat extends Component{
  render(){
    const mouse = this.props.mouse;
    return(
      <img src='/xx.jpg' />
    );
  }
}

class Mouse extends Component{
  constructor(props){
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {x:0,y:0};
  }
handleMouseMove(event){
  this.setState({
    x:event.clientX,
    y:event.clientY
  });
}

render(){
  return(
    <div onMouseMove={this.handleMouseMove}>
      {this.props.render(this.state)}
    </div>
  );
}
}
class MouseTracker extends Component{
  render(){
    return(
      <div>
        <h3>移动</h3>
        <Mouse render={mouse =>(
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

function ListItem({ item }){
  return(
    <Fragment>
      <dt>{ item.term }</dt>
      <dd>{ item.description }></dd>
    </Fragment>
  );
}
function Glossary(props){
  return(
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id}/>
      ))}
    </dl>
  )  
}

