import {useState} from "react";

export default function ListProduct(){
    let [products, setProducts] = useState([
        {name:"Iphone13", price:10000, quantity:10},
        {name:"Iphone14", price:15000, quantity:15},
        {name:"Iphone15", price:20000, quantity:20},
    ]);
    let [name,setName] = useState('');
    let [price,setPrice] = useState(0);
    let[quantity,setQuantity] = useState(0);
    function addProduct(){
        setProducts([...products, {name,price,quantity}])
        setName('');
        setPrice(0)
        setQuantity(0)
    }
    return(
        <>
            {products.map((product)=>(
                <h3>
                {product.name}:{product.price},Số lượng:{product.quantity}
                </h3>
            ))}
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" value={price} onChange={e => setPrice(+e.target.value)}/>
            <input type="text" value={quantity} onChange={e => setQuantity(+e.target.value)}/>
            <button onClick={addProduct}>Thêm Sản Phẩm</button>
        </>
    )
}