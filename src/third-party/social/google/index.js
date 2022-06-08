import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default class Google {
    constructor() {
        GoogleSignin.configure({
            scopes: ['email', 'profile'],
            webClientId: '360471939720-74t9i8n3971gaji2ep1h5qfs8vt5hgtv.apps.googleusercontent.com',
            iosClientId: '360471939720-74t9i8n3971gaji2ep1h5qfs8vt5hgtv.apps.googleusercontent.com',
            offlineAccess: true
        });
    }
}