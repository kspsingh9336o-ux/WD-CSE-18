import React  from 'react'
function UseState(){
const [color,setColor]=UseState('red');
const mouseover=()=>{
    setColor('blue');
}
return(
    <div>
<h2>Use State Hook</h2>
<p style={{color:color}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse quasi consequuntur aperiam earum, dolores, accusamus excepturi tempore quas aliquid eligendi repellendus sint possimus in laboriosam! Rerum id reiciendis quae!</p>


    </div>

} 
