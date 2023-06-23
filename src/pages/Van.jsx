import React from "react"
import { Link } from "react-router-dom"

export default function Van() {

    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-element">
            <Link to={`/vans/${van.id}`}>
                <img className="van-img" src={van.imageUrl} />
                <div className="van-info">
                    <h3 style={{flex:3}}>{van.name}</h3>
                    <div style={{flex:1}}> 
                        <h3 className="van-price">${van.price}</h3>
                        <p className="van-day">/day</p>
                    </div>
                </div>
                <p className={`van-type ${van.type}`}>{van.type}</p>
            </Link>
        </div>
    ))

    return (
        <>
            {vanElements}
        </>
    )
}