import React, { useState } from "react";


function Addbook (props){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const titleChange = (e) =>{
        setTitle(e.target.value);
    };

    const authorChange = (r) =>{
        setAuthor(r.target.value);
    };

    const addBookChange = () => {
        if (!title.trim() || !author.trim()) {
            setError('Both title and author are required.');
        } else {
            
            setTimeout(() =>{
                setSuccess('File saved successfully!');
            }
            )
            console.log('Book added:', { title, author });
            setTitle('');
            setAuthor('');
            setError('');
        }
    }
    return (
        <div className="container">
            <h3 className="text-start">Add a new Book</h3>
            <div class="mb-3">
                <p className="text-start"><b>Title</b></p>
                <div class="input-group">
                    <input type="text" value={title} onChange={titleChange} className="form-control" id="title" required/>
                </div>
            </div>
            <div class="mb-3">
                <p className="text-start"><b>Author</b></p>
                <div class="input-group">
                    <input type="text" value={author} onChange={authorChange} className="form-control" id="author" required/>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div className="row">
                <div class="form-check col-6">
                    <p class="form-check-label text-start"><b>Favourite</b><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></p>
                </div>
                <div className="col-6">
                    <p className="text-end"><button style={{background: 'rgb(42, 231, 42)'}} className="rounded-1" onClick={addBookChange}><i className="bi bi-plus-circle-fill">Add</i></button></p>
                </div>
            </div>
        </div>
    );
}
export default Addbook;