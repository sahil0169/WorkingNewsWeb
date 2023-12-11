
import React from "react"
import Link from 'next/link'
export default function Side() {

    function Bar() { 
        return (
            <div className="Side4">
                <div className="Side3">
        
                    <Link className="link" href="/?category=general">General</Link>
                    <br />
                    <Link className="link" href="/?category=entertainment">Entertainment</Link>
                    <br />
                    <Link className="link" href="/?category=business">Business</Link>
                    <br />
                    <Link className="link" href="/?category=health">Health</Link>
                    <br />
                    <Link className="link" href="/?category=technology">Technology</Link>
                    <br />
                    <Link className="link" href="/?category=sports">Sports</Link>
                    <br />
                    <Link className="link" href="/?category=science">Science</Link>
        </div>
            </div>
            
        )
    }
    const [count, setCount] = React.useState(false)
    return (

        <div className="Side1">
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        </div>
    )
}

{/* <h3 onClick={()=>props.toggle("category","general")}>General</h3>
            <h3 onClick={()=>props.toggle("category","entertainment")}>Entertainment</h3>
            <h3 onClick={()=>props.toggle("category","business")}>Business</h3>
            <h3 onClick={()=>props.toggle("category","health")}>Health</h3>
            <h3 onClick={()=>props.toggle("category","sports")}>Sports</h3>
            <h3 onClick={()=>props.toggle("category","technology")}>Technology</h3>
            <h3 onClick={()=>props.toggle("category","science")}>Science</h3> */
        }