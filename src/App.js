import React,{Component,Fragment} from 'react'
import SisterItem from './SisterItem'
import './App.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'react-sage',
            list:['react','react-router','redux','react-redux']
        }
        this.inputChange = this.inputChange.bind(this)
        this.add = this.add.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    render(){
        return(
            <Fragment>
                
                    <label htmlFor="hua">添加服务 : </label>
                    
                    <input id="hua" className="input" value={this.state.inputValue} onChange={this.inputChange}/>

                    <button onClick={this.add}>增加服务</button>
                
                <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                                //<SisterItem inputValue = {item} key={index} onClick={this.deleted.bind(this,index)}/>
                                <SisterItem 
                                content={item}
                                key={index}
                                index={index}
                                deleteItem={this.deleteItem}
                                dangerouslySetInnerHTML = {{ __html: item }}
                                // avname = '松岛枫'
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