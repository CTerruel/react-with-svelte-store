import { useState, useEffect } from "react"
import { $cart } from "../store/cart"

const CartLength = () => {
    const [cart, setCart] = useState($cart.initialValue)

    useEffect(() => {
        const unsub = $cart.subscribe(value => setCart(value))
        return () => unsub()
    }, [])
    return (
        <>
            <p>There are <strong>{cart.length}</strong> types of items in your cart</p>
            <p>
                Total items:
                <strong> {cart.reduce((sum, item) => sum + item.quantity, 0)}</strong>
            </p>
        </>
    )
}

export default CartLength