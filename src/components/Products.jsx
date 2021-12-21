import { $cart } from "../store/cart"
import { products } from "../store/products"
import '../styles/products.css'

const Products = () => {

    const addToCart = product => {
        $cart.update(products => {
            let found = false
            products.forEach(item => {
                if (item.id === product.id) {
                    product.quantity += 1
                    found = true
                }
            })

            return found ? [...products ] : [...products, product]
        })
    }

    return (
        <div className="product-list">
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <div className="image" style={{backgroundImage: `url(${product.image})`}}></div>
                        <h4>{product.name}</h4>
                        <p>₹{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products