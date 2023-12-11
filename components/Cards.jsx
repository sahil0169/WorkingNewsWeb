"use client"
import React from "react"
export default function cards(props) {

    
    return (
        <a href={props.url}>
        <div className="card1">
            <img src={props.urlToImage} className="card2" />
            <div>
            <h3 className="card3">{props.description}</h3>
            <h6 className="card4" >'{props.author}//{props.publishedAt}'</h6>
            <h4 className="card5">{props.content}</h4>
            </div>
            
            </div >
            </a>
    )
}