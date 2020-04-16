function add(...arg) {
	let result = 0
	for (let item of arg) {
		result += item
	}
	return result
}
// module.exports = add
export default {
	add
}