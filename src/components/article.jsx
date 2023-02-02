// import { Article } from "@mui/icons-material";
import React from "react";
function Article(){
   
        const customStyle={
        display : "flex",
        flexDirection : "column",
        justifyContent : "end",
        height: "323px",
        width: "170px",
        color:"white",
        padding: "12px 22px",
        borderRadius: "20px",
        margin:"46px 10px",
        backgroundImage :`url(${require("../images/rect-6.png")})`,
        backgroundSize:`214px 348px`,
        backgroundRepeat : `no-repeat`,
        
    }
    return(
        <div class="article" style={customStyle}>
    <h3 style={{
        fontSize:"20px"
    }}>
        Article Headline
    </h3>
    <p style={
        {marginBottom:"20px",
        fontWeight : "light"}
    }>Written by - Richard Parker</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus quam harum quae facere amet. Nesciunt similique vitae repellat eaque voluptate, explicabo quod vero reiciendis ipsa fuga, laudantium architecto molestiae ut dignissimos excepturi ullam delectus odio sed corrupti quam doloribus minima, consequuntur cum repudiandae. Sint vero non ipsa laborum voluptatibus eum.  </p>
  </div>
    )
}
export default Article;