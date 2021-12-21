export const writable = initialValue => {
	let listeners = []

	const set = newValue => {
		initialValue = newValue
		notify()
	}

	const update = fn => {
		set(fn(initialValue))
	}

	const subscribe = fn => {
		listeners.push(fn)
		return () => listeners = listeners.filter(item => item !== fn)
	}

	const notify = () => listeners.forEach(fn => fn(initialValue))
	
	return  {initialValue, set, update, subscribe}

}

export const derived = (store, fn) => {
	let value = store.value
	let result
	let listeners = []
	
	store.subscribe(v => set(v))
	
	const set = v => {
		value = v
		result = fn(value)
		notify()
	}
	
	const subscribe = fn => {
		listeners.push(fn)
		return () => listeners = listeners.filter(item => item !== fn)
	}
	
	const notify = () => listeners.forEach(fn => fn(result))
	
	return {value, subscribe}
}