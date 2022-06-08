import RNAsyncStorage from "@react-native-async-storage/async-storage"

export default class AsyncStorage {

    constructor() {
        this.getItem = async (key) => {
            const jsonString = await RNAsyncStorage.getItem(key)
            console.log('[StoreService] - getItem', key, jsonString && JSON.parse(jsonString))
            if (jsonString) return JSON.parse(jsonString)
            return null
        }

        this.setItem = async (key, item) => {
            console.log('[StoreService] - setItem', key, item)
            if (item) {
                await RNAsyncStorage.setItem(key, JSON.stringify(item))
            } else {
                await RNAsyncStorage.removeItem(key)
            }
        }
    }

}