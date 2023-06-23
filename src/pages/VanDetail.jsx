import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

export default function VanDetail() {

    const params =useParams()

    const [van, setVan] = React.useState({})

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    console.log(van)

    return (
        <div className="detail">
            <Link to="/vans" className="detail-back">&#8592;Back to all vans</Link>
            <img className="detail-img" src={van.imageUrl} />
            <p className={`van-type ${van.type}`}>{van.type}</p>
            <h1 className="detail-name">{van.name}</h1>
            <h1>${van.price}<span style={{fontWeight:400}}>/day</span></h1>
            <p className="detail-descrption">{van.description}</p>
            <div className="center-btn"><button className="home-btn">Rent this van</button></div>
        </div>
    )
}