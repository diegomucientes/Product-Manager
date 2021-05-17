import React,{ useEffect, useState }from 'react';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';

const Detail = (props) => {
    let { id } = useParams();
    const [product, setproduct] = useState({});
    useEffect(() => {
        console.log({id})
        axios.get("http://localhost:8000/api/product/" + id)
       
            .then(res => setproduct({
                ...res.data
            }))
    }, [id])
    return (
        <div>
            <p>Title:{product.title}</p>
            <p>Price:{product.price}</p>
            <p>Description:{product.description}</p>
            <button><Link to={`/`}>HOME</Link></button>
            <button><Link to={"/product/"+product._id+"/update"}>Update </Link></button>
        </div>
    );
}

export default Detail;
