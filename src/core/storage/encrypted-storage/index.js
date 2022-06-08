import RNEncryptedStorage from 'react-native-encrypted-storage';

export default class EncryptedStorage {

    constructor() {
        this.getItem = async (key) => {
            const jsonString = await RNEncryptedStorage.getItem(key)
            console.log('[StoreService] - getItem', key, jsonString && JSON.parse(jsonString))
            if (jsonString) return JSON.parse(jsonString)
            return null
        }

        this.setItem = async (key, item) => {
            console.log('[StoreService] - setItem', key, item)
            if (item) {
                await RNEncryptedStorage.setItem(key, JSON.stringify(item))
            } else {
                await RNEncryptedStorage.removeItem(key)
            }
        }
    }

}