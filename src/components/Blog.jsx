import React, { useState } from "react";
import Article  from "./article"; 
function Blog(){
    const bgUrl=["../images/rect-6.png","../images/rect-5.png","../images/rect-4.png","../images/rect-3.png"];
    return(
        <div className="container" id="c-3">
    <h1 style={{textAlign:"center"}}>
        THE <span>180 DC</span> Blog</h1>
        <div id="carousel" style={{
            display : "flex",
            flexDirection : "row",
        }}>
<Article/>
<Article/>
<Article/>
<Article/>
        
        </div>
        </div>
    )
}
export default Blog;