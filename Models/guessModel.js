import { rand } from '../JS/Utils/math.js'

const levels = new Map([
    ['low', 10],
    ['high', 100],
]);

const Guess = {
    set level(level) {
        this._level = level || 'low'
    },
    get level() {
        return this._level;
    },
    set max(level) {
        this._max = levels.get(level);;
    },
    get max() {
        return this._max;
    },
    set limit(level) {
        this._limit = Math.ceil(Math.min(levels.get(level) / 4, 10));
    },
    get limit() {
        return this._limit;
    },
    set secret(level) {
        this._secret = rand(levels.get(level));
    },
    get secret() {
        return this._secret;
    },
    count: 1,
    initGuess: function (level = "low") {
        this.level = level;
        this.max = this.level;
        this.limit = this.level;
        this.secret = this.level;
    }
}



export { Guess }