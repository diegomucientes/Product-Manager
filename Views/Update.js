import React, { useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ProductForm from '../Components/ProductForm';

const Update = (props) => {
   let { id } = useParams();
   const [product,setProduct]=useState("");
   const [loaded, setLoaded] = useState(false);
//    const [title, setTitle] = useState("");
//    const [price, setPrice] = useState("");
//    const [description, setDescription] = useState("");
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err=>err)
    }, [id])
    const updateProduct = product => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res));
            
    }
    return (
        <div>
            <h1>Update a Product</h1>
        {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
    </div>
    )
}

export default Update;
