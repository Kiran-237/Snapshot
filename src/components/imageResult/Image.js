import React from "react";

function Image(props){

    const pictures = props.setImages

    const flexStyle = {
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        margin: '0',
    }
    const imageStyle={   
        width: '300px',
        height: '250px',
        margin: '0 10px 15px 0',
        filter: 'drop-shadow(5px 5px 5px lightgreen )'
    }
    return(
        <div style={flexStyle}>

            {
                pictures.map((pic, i) => <img src={pic.webformatURL} key={i} alt='album' style={imageStyle}/>)
            } 
        </div>
    )
}

export default Image;