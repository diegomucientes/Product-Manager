import React,{useState}from 'react';
// import axios from 'axios';
// import Button from '@material-ui/core/Button';
// import div from '@material-ui/core/div';
// import { input, label } from '@material-ui/core';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import DescriptionIcon from '@material-ui/icons/Description';
// import TitleIcon from '@material-ui/icons/Title';

const ProductForm = (props) => {
    const {onSubmitProp,initialDescription,initialPrice,initialTitle}=props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    // const [Errors,setErrors]=useState({
    //     titleError:"",
    //     priceError:"",
    //     descriptionError:""
    // });
    
    const onSubmitHandler=e=>{
        e.preventDefault();
        onSubmitProp({title,price,description});
    //     console.log(product)
    //     axios.post('http://localhost:8000/api/product',
    //         product
    //     ).then(res=>console.log(res))
    //     .catch(err=>console.log(err))
        
    //     console.log(`Product Fullfiled, ${product}`);
    // }
    }
    // const onChange=(e)=>{
    //     e.preventDefault();
    //     onSubmitProp({title,price,description});
        // setproduct({
        //     ...product,
        //     [e.target.name]:e.target.value
        // });
       
        // if(e.target.name==="title"&& e.target.value.length>3){
        //     setErrors({...Errors,titleError:"Title length must be 3 characters or more"})
        // }
        // if(e.target.name==="price"&& e.target.value.length>=1){
        //     setErrors({...Errors,priceError:"Price must have at least 1 number "})
        // }
        // if(e.target.name==="description"&&e.target.value.length>10){
        //     setErrors({...Errors,descriptionError:"Description length must be 10 characters or more"})
        // }
    

   

  
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="title">Title </label>
                <input type="text"name="title"onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="price">Price </label>
                <input type="number"name="price"onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description"onChange={(e)=>setDescription(e.target.value)}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ProductForm;
