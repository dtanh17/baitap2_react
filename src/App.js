import React, { Component } from 'react';
import './App.css';
const data=[
    {
      name: 'anh1',
      age: 21
    },
    {
      name: 'anh2',
      age: 21
    },
    {
      name: 'anh3',
      age: 21
    },
    {
      name: 'anh4',
      age: 21
    },
    {
      name: 'anh5',
      age: 21
    },
    {
      name: 'anh6',
      age: 21
    },
    {
      name: 'anh7',
      age: 21
    }
  ]

const transferType = {
    transfer1: 'transfer1',
    transfer2: 'transfer2'
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = {dataTable1: data,dataTable2: []}
    }

    handleTransfer(index, item, type, e){
        const newData1 = this.state.dataTable1.filter((item,i)=> i!==index)
        const newData2 = this.state.dataTable2.filter((item,i)=> i!==index)

        this.setState({
            dataTable2: type === transferType.transfer1? [...this.state.dataTable2,item]: newData2
        })

        this.setState({
            dataTable1: type === transferType.transfer1? newData1 : [...this.state.dataTable1,item]
        })
    }

    handleSubmit(){
        this.setState({dataTable1: [{name: this.state.name,age: this.state.age},...this.state.dataTable1], name: '', age: ''})
    }

    render() {
        return (
            <div className='App'>
              ///////////////
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    this.handleSubmit()
                }}>
                    <label>name</label>
                    <input name='name' value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})}></input>
                    <label>age</label>
                    <input name='age' value={this.state.age} onChange={(e)=> this.setState({age: e.target.value})}></input>
                    <button type='submit'>add</button>
                </form>
                <div className='table-container'>
                  <div className='table-left'>
                  <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    {
                        this.state.dataTable1.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td><button onClick={(e)=>this.handleTransfer(index,item,transferType.transfer1,e)}>Transfer1</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
                  </div>
                  <div className='table-right'>
                  <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    {
                        this.state.dataTable2.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td><button onClick={(e)=>this.handleTransfer(index,item,transferType.transfer2,e)}>Transfer2</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
                  </div>
                
                
                </div>
                ///////////////
            </div>
        );
        
    }
}

export default App;