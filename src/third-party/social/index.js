import Apple from "./apple";
import Facebook from "./facebook";
import Google from "./google";

export default class Social {
    constructor() {
        this.apple = new Apple()
        this.facebook = new Facebook()
        this.google = new Google()
    }
}