import React, { useState } from 'react'
import { Input, Button, message, Spin } from 'antd';
import axios from 'axios';
import "./addnew.css"
import Header from '../Components/header';
const { TextArea } = Input;

function NewBook() {

    const [Name, setname] = useState("")
    const [Author, setAuthor] = useState("")
    const [Description, setDescription] = useState("")
    const [spinning, setSpinning] = useState(false);


    const Validate = () => {

        if (!Name) { message.warning("Please enter the book name") }

        if (!Author) {
            message.warning("Please enter the Author name")
        } else {
            Addnewbook()
        }
    }

    const Addnewbook = async () => {

        try {
            setSpinning(true)
            await axios.post("/sa-api/v1/books/add-newbook", { Name: Name, Author: Author, Description: Description })
            message.success("New Book Added")
            setname("")
            setAuthor("")
            setDescription("")
            setSpinning(false)
        } catch (error) {
            setSpinning(false)
            message.error("Failed to new book")
        }
    }

    return (
        <>
            <Spin spinning={spinning} fullscreen size='large' />
            <Header />
            <div className='main'>
                <div className='searcharea'>

<h2>Add New Book</h2>
                    
                    <Input size='large' placeholder="Book Name" style={{ marginBottom: "15px", width: "400px" }} value={Name} onChange={(e => { setname(e.target.value) })} />
                    <Input size='large' placeholder="Author Name" style={{ marginBottom: "15px", width: "400px" }} value={Author} onChange={(e) => { setAuthor(e.target.value) }} />
                    <TextArea
                        maxLength={300}

                        placeholder="Description"
                        value={Description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        style={{
                            marginBottom: "20px",
                        }}
                    />
                    <Button onClick={Validate} size='large' style={{width:"80%"}}>Add Book</Button>
                </div>
            </div >
        </>
    )
}

export default NewBook