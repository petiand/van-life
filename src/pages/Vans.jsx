import React from "react"
import Van from "./Van"

export default function Vans(){
    return(
        <div className="vans">
            <h1>Explore our van options</h1>
            <div className="vans-filter">
                <button className="vans-filter-btn">Simple</button>
                <button className="vans-filter-btn">Luxury</button>
                <button className="vans-filter-btn">Rugged</button>
                <button className="vans-filter-clear">Clear filters</button>
            </div>
            <div className="van-lsit">
                <Van />
            </div>
        </div>
    )
}