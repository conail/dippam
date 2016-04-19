export default class Collection {
    constructor(title = '', description = '', uri ='/', from, to) {
	this.title = title
	this.description = description
	this.uri = uri
	this.from = from || 1700
	this.to = to || new Date().getFullYear()
    }
}
