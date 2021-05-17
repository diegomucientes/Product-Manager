import React,{useState,useEffect} from 'react';
// import { Link ,useParams} from 'react-router-dom';
import{Link}from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';


const ProductList = (props) => {


    // let {productId} =useParams();
    // const {removeFromDom}=props;

    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    // }

    const [products,setProducts]=useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, []);

    const removeFromDom=(productId)=>{
        setProducts(products.filter(p=>p._id !== productId))
    }


    
    return (
        <ul>
            {props.products.map((p, idx)=>{
                return (
                    <div key={idx} >
                        <li><Link to ={`/product/`+p._id}>{p.title}, {p.price},{p.description}</Link></li>
                        <DeleteButton productId={p._id} successCallback={()=>removeFromDom(p._id)}></DeleteButton>
                    </div>
                )
                
            })}
        </ul>
    );

        
}

export default ProductList;
