import { useState, useEffect } from "react"
import { $address, $cart } from "../store/cart";
import "../styles/address.css"

const Address = () => {
    const [address, setAddress] = useState($address.initialValue)
    const [cart, setCart] = useState([])

    const checkout = () => {
        alert(JSON.stringify(address))
        alert(JSON.stringify(cart))
        setAddress({
            name: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            pin: "",
        })
    }

    useEffect(() => {
        const unsub = $address.subscribe(value => setAddress(value))
        return () => unsub()
    }, [])

    useEffect(() => {
        const unsub = $cart.subscribe(value => setCart(value))
        return () => unsub()
    }, [])

    return (
        <div className="shipping-address">
            <div>
                <p>Name</p>
                <input value={address.name} onChange={e => setAddress({...address, name: e.target.value})} />

                <p>Email</p>
                <input value={address.email} onChange={e => setAddress({...address, email: e.target.value})} />

                <p>Phone</p>
                <input value={address.phone} onChange={e => setAddress({...address, phone: e.target.value})} />

                <p>Address</p>
                <textarea value={address.street} onChange={e => setAddress({...address, street: e.target.value})} 
                    cols="24" rows="6"></textarea>

                <p>City</p>
                <input value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />

                <p>State</p>
                <input value={address.state} onChange={e => setAddress({...address, state: e.target.value})} />

                <p>PIN</p>
                <input value={address.pin} onChange={e => setAddress({...address, pin: e.target.value})} />

                <div>
                    <button onClick={checkout}>Checkout</button>
                </div>

            </div>

            <div className="current-address">
                <p>{address.name}</p>
                <p>{address.email}</p>
                <p>{address.phone}</p>
                <p>{address.street}</p>
                <p>{address.city}</p>
                <p>{address.state}</p>
                <p>{address.pin}</p>
            </div>
        </div>
    )
}

export default Address