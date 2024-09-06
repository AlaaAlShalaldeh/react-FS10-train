import { useEffect, useState } from "react";


export default function Getproduct() {
    const [Porduct,setProduct]=useState([])
    const getProducts= async()=>{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data.products)
        setProduct(data.products);
    }
    useEffect(()=>{
        getProducts();

    },[])
  return (
    <div className="container">
        <div className="row">
                {Porduct.map((product)=>(
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={product.thumbnail} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description.split(' ').slice(0,5).join(" ")+" ..."}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Precio: ${product.price}</small>
                            </div>
                        </div>
                    </div>
                ))}
            
        </div>
    </div>
  )
}
