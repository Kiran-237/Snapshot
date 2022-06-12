import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Image from '../imageResult/Image';

function Search(){

const[input, setInput] = useState('');
const[images, setImages] = useState([]);

    const getImages = async () => {
        const { data } = await axios.get(`https://pixabay.com/api/?key=27880361-bc4454661400a34399c307948&q=${input}&image_type=photo`)
        setImages(data.hits)
        setInput('')
        
    }
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=27880361-bc4454661400a34399c307948`)
        .then(response => response.json())
        .then(response => setImages(response.hits))
        .catch(error => console.log(error))
        // setInput('')
    },[])
    
    const inputStyle = {
        backgroundColor: 'black',
        color: 'green',
        marginLeft: '570',
        marginTop: '70px',
        marginBottom: '50px',
        paddingTop: '20px',
        paddingLeft: '70px',
        fontSize: '30px',
        borderTopStyle: 'hidden',
        borderRightStyle: 'hidden',
        borderLeftStyle: 'hidden',
        outline: "none",
        borderBottomStyle: 'groove',
    }

    const btn={
        width: '70px',
        padding: '10px',
        marginLeft: '20px',
        borderRadius: '15px',
        backgroundColor:'turquoise'
    }

    const divStyle={
        display: 'inline'
    }

    return(
        <div style={divStyle}>
            <input 
                type="text" 
                className="input"
                placeholder='Search for Images'
                style={inputStyle}
                name="search text" 
                value={input}
                onChange={(e)=>{
                    setInput(e.target.value)
                }}
            />
            <button type='submit' className='button' onSubmit={getImages}style={btn}>Search</button>
            <Image setImages={images}/>
        </div>
        
    )
    
}


export default Search;
