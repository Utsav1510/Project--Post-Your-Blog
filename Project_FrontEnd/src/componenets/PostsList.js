import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';
 class PostsList extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         
         posts:[],
         unique:[]
        
      };
     

    }
    
    componentDidMount(){
        axios.get('http://localhost:3000/genuine/getAllPost',) // double 
        
        .then(response=> {
            console.log(response)
            this.setState({posts: response.data})
           
        })
        .catch( error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
        
    }

  //   show(id){
  //     console.log(id)
  //     axios.get(`http://localhost:3000/genuine/getPost/${id}`,)
  //     .then(response=>{
  //       console.log(response)
  //       this.setState({unique: response.data})
  //       alert(` title: ${response.data.title}  \n Author: ${response.data.author} \n Content: ${response.data.content}`)
  //     })
  //     .catch(error=>{
  //       console.log(error)
  //       this.setState({errorMsg:"Error receiving unique data"})
  //     })



  //  }


   async delete(id){


    axios.delete(`http://localhost:3000/genuine/deletePost/${id}`,)


    .then(response=>{
      alert("DeltedSuccessfully")
      window.location.reload();
    })
    .catch(error=>{
        console.log(error)
        this.setState({errorMsg:"Error in Deletion"})
      },)



      // .then(response=>{
      //   console.log(response)
        
        
      // })
     

      // .then(res2=>res2.json())
      // .then(res3=>{
      //   const up=this.state.posts.filter(item=>{
      //     return item._id !==res3._id
      //   })
      // })
      
      // .catch(error=>{
      //   console.log(error)
      //   this.setState({errorMsg:"Error in Deletion"})
      // },)

    
   }



   update(data){
    console.log(data);
    let { _id, title,author ,content} = data;
    
    localStorage.setItem('ID', _id);
    localStorage.setItem('title', title);
    localStorage.setItem('Name', author);
    localStorage.setItem('Content', content)
   }
   
  render() {


    const {posts,errorMsg}=this.state;


   
    
    return (
      <div className='postlist'>
      <h1 className='bloglist_h'>Blog List</h1>
      <table className="table" align='center' >
        
        <tbody>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th> Content</th>
            <th> Fucntions</th>
        </tr>
      
        
        {
            posts.length ?
            posts.map(post => 
            <tr key= {posts.title}>
              <td>{post.title} </td>
              <td>{ post.author} </td> 
              
              <td>{post.content}</td>
              <td>
                {/* {post._id} */}
                <div>
          {/* <button onClick={()=>this.show(post._id)}> Show unique</button> */}
          <button className="delete" onClick={()=>this.delete(post._id)}>Delete Post</button>
          <Link to="/update">
          <button className='update' onClick={()=>this.update(post)}>Update</button>
          </Link>
        </div>
                
                </td>
              
              
        <td>   
        
          
          </td>           
     
            </tr>
                 
              
            ): null
        }   
        { errorMsg ? <div> {errorMsg} </div> :null}


       
        </tbody>
        <div></div>
        
      </table>
      <Link to="/">
        <button className='backb'>Back</button>
        </Link>
      </div>
    )
  }
}
 

export default PostsList