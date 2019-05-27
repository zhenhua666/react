import React,{Component,Fragment} from 'react'
import SisterItem from './SisterItem'
import './App.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'心中填不满的缘,是你',
            list:['我被爱判处终身孤寂','不还手，不放手','笔下画不完的圆']
        }    
    }



    render(){
        return(
            <Fragment>
                
                    <label htmlFor="hua">添加服务 : </label>
                    
                    <input id="hua" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>

                    <button onClick={this.add.bind(this)}>增加服务</button>
                
                <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                                //<SisterItem inputValue = {item} key={index} onClick={this.deleted.bind(this,index)}/>
                                <SisterItem 
                                content={item}
                                key={index}
                                index={index}
                                deleteItem={this.deleteItem.bind(this)}
                                />
                        ) 
                    })
                }
                </ul>
            </Fragment>    
        )
    }

    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    add(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:'',
        })
    }
    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default App