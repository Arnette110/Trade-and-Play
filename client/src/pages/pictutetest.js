

import React, { Component } from 'react'

import axios from 'axios';
 

class SimpleReactFileUpload extends Component {

  state = { selectedFile: null }

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }
  
 

  uploadHandler = () => {
    const formData = new FormData()
    formData.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    axios.post('/client/picturebio', formData)
  }
  

  render() {
    return (
      <div>
<input type="file" onChange={this.fileChangedHandler}/>
<button onClick={this.uploadHandler}>Upload!</button>

      </div>
   )
  }
}



export default SimpleReactFileUpload
