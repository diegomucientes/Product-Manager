import React,{useState,useEffect} from 'react';
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components/ProductList';
import axios from 'axios';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])
     
    // const removeFromDom = productId => {
    //     setProducts(products.filter(product => product._id !== productId));
    // }
    const createProduct=product=>{
        axios.post('http://localhost:8000/api/product',product)
        .then(res=>{setProducts([...products,res.data])})
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct}/>
            {loaded && <ProductList products={products} />}
        </div>
    );
}

export default Main;
