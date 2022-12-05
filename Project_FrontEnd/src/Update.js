
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
    




export default function Update() {
    const [Title, setTitle] = useState('');
    const [Name, setName] = useState('');
    const [Content, setContent] = useState("");
    const [id, setID] = useState("");
   
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        
        setTitle(localStorage.getItem('title'));
        setName(localStorage.getItem('Name'));
        setContent(localStorage.getItem('Content'))
}, []);

const updateAPIData = () => {
    console.log("hello")
    console.log(Title)
    axios.patch(`http://localhost:3000/genuine/editPost/${id}`,
            { title:Title, author:Name, content:Content  },
           
        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });    
   
}
    return (
        <div>

            <Form className="create-form form2">
                <table>

                <Form.Field>
                    <tr>
                        <td><label>Title</label></td>
                    
                        <td><input placeholder='title' value={Title} onChange={(e) => setTitle(e.target.value)}/>
                        </td>
                    </tr>
                </Form.Field>
                <Form.Field>
                    <tr>
                    <td><label>Author</label></td>
                    
                    <td><input placeholder='name' value={Name} onChange={(e) => setName(e.target.value)}/></td>
                    </tr>   
                </Form.Field>


                <Form.Field>
                    <tr>
                        <td className='content'>
                
                <label >Content</label>
                </td>
                
                <td>
                <textarea label='Content'className='content' value={Content}  onChange={(e) => setContent(e.target.value)}></textarea>
                </td>
                </tr>

                </Form.Field>

                </table>
                <Link to="/list">
                <Button className='backb' onClick={updateAPIData} type='submit'>Update </Button>
                
                     
                </Link>
            </Form>
        </div>
    )
}