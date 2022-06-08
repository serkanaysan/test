import AsyncStorage from "./async-storage";
import EncryptedStorage from "./encrypted-storage";

export default class Storage {

    constructor() {
        this.asyncStorage = new AsyncStorage()
        this.encryptedStorage = new EncryptedStorage()
    }
}