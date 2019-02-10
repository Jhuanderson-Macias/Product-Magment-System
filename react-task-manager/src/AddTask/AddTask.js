import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {
  constructor(props){
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      addNewTask : (<div></div>)
    }
  }

  handleClose(){
    this.setState({
      addNewTask : (<div></div>)
    })
  }

  handleShow(){
    this.setState({
      addNewTask: (
       <form>
         <div className='form-group'>
          <label>TaskName</label>
          <input className="form-control" type="text"/>
          <button type="submit" className="btn btn-primary" onClick= {this.handleAdd}>add</button>
          <button className="btn btn-primary" onClick= {this.handleClose}>close</button>
         </div>
       </form>
    )
    })
  }

  handleAdd(){
    alert('add')
  }



  render() {

    return (
      <div>
      {this.state.addNewTask}
      <div className="row">
          <div className="col-sm-8">
            <h3 className="AddTask-header">React Task Manager</h3>
          </div>
          <div className="col-sm-4">
            <button type="button" className="btn btn-success AddTask-button" onClick = {this.handleShow}>Add</button>
          </div>
      </div>
      </div>
    );
  }
}

export default AddTask;