import { writable } from "./core"

export const $cart = writable([])

export const $address = writable(
    {
		name: "",
		email: "",
		phone: "",
		street: "",
		city: "",
		state: "",
		pin: "",
    }
)