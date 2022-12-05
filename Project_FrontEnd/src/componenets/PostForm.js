import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title:'',
         author: '',
         content: ''
      }
    }
    changeHandler = e=>{
        console.log("hello")
        this.setState({[e.target.name]:e.target.value})
    }
    //
    submitHandler= e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/genuine/createPost', this.state)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error)
        })

        // var a=document.querySelector('#container');
        window.location.reload()
        
    }
  render() {
    const {title,author,content}=this.state;
    return (
    
      <div>
        <center>
        <h1>Post Your Blog </h1>
        <form className='myForm' align="center" onSubmit= {this.submitHandler}>
            <div>
              <label>
                  Title
              </label>
              <br></br>
                <input type="text" 
                name="title" 
                defaultValue={title} 
                onChange={this.changeHandler} />
            </div>
            <div>

            <label>
                  Author
              </label>
              <br></br>
                <input type="text" 
                name="author" 
                defaultValue={author}
                onChange={this.changeHandler} />
            </div>
            <div>
            <label>
                    Content
              </label>
              <br></br>
              
                <textarea name="content" 
                defaultValue={content}
                onChange={this.changeHandler} 
                rows="5"
                cols="30"
                >
                
                </textarea>


                {/* <input type="text" 
                  
                name="content" 
                defaultValue={content}
                onChange={this.changeHandler}  />
                 */}
            </div>
            <button className='backb' type="submit" >Submit</button>
            <Link to="/list">
      <button  className='backb'>Show ALL</button>
      </Link>
        </form>
        </center>
      </div>
      
    )
  }
}

export default PostForm