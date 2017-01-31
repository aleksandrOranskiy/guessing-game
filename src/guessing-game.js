class GuessingGame {
    constructor(min = 0, max = 0) {}

    setRange(min, max) {

    	this.min = min;
    	this.max = max;
    }

    guess() {

    	return Math.ceil(this.min + (this.max - this.min) / 2);
    }

    lower() {

    	this.setRange(this.min, this.guess());
    }

    greater() {

    	this.setRange(this.guess(), this.max);
    }
}

module.exports = GuessingGame;
