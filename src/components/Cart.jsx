import { useState, useEffect } from "react"
import { $cart } from "../store/cart"
import '../styles/cart.css'

const Cart = () => {
    const [cart, setCart] = useState($cart.initialValue)
    const [total, setTotal] = useState(0)

    const plusItem = product => {
        $cart.update(products => {
            products.forEach(item => {
                if (item.id === product.id) {
                    product.quantity += 1
                }
            })
            return [...products]
        })
    }

    const minusItem = product => {
        $cart.update(products => {
            let last = false
            products.forEach(item => {
                if (item.id === product.id) {
                    if (product.quantity > 1) {
                        product.quantity -= 1
                    } else {
                        last = true
                    }
                }
            })

            return last 
                ? products.filter(item => item.id !== product.id)
                : [...products]
        })
    }

    useEffect(() => {
        const unsub = $cart.subscribe(value => setCart(value))
        return () => unsub()
    }, [])

    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
    }, [cart])

    return (
        <div className="cart-list">
            {cart.map(item => {
                return (
                    <div className="cart-item" key={item.id}>
                        <img width="50" src={item.image} alt={item.name}/>
                        <div>{item.quantity}
                            <button onClick={() => plusItem(item)}>+</button>
                            <button onClick={() => minusItem(item)}>-</button>
                        </div>
                        <p>₹{item.price * item.quantity}</p>
                    </div>
                )
            })}
            <div className="total">
                <h4>Total: ₹ {total}</h4>
            </div>
        </div>
    )
}

export default Cart