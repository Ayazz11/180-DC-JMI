import React from "react";
function Logo(props){
    return(
        <img src={require('./main-logo.png')} id="hr-logo" style={{width:props.size}}/>
    )

}

export default Logo;