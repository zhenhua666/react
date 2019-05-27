import React,{Component} from 'react';
import axios from 'axios';

class TrData extends Component{
    constructor(props){
      super(props);
    }

    componentDidMount() {
        axios('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
    }

    render(){
      return (
        this.props.users.map((user,i)=>{
        return (
            <tr key={user.id} className="text-center">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.sex}</td>
            </tr>
        )       
        
        })
      )
    }
  }//is 