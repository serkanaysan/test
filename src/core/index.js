import Storage from "./storage"

export default class Core {
    constructor() {
        this.storage = new Storage()
    }
}