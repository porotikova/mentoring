class Calculator {
  constructor() {
    this.state = 0;
  }

  add = (value = 0) => {
    if (!this.add.value) {
      this.add.value = this.state;
    }
    this.add.value += value;
    this.add.toString = () => this.add.value;
    this.state = this.add;
    return this.add;
  };

  subtract = (value = 0) => {
    if (!this.subtract.value) {
      this.subtract.value = this.state;
    }
    this.subtract.value -= value;
    this.subtract.toString = () => this.subtract.value;
    this.state = this.subtract;
    return this.subtract;
  };

  divide = (value = 0) => {
    if (!this.divide.value) {
      this.divide.value = this.state;
    }
    this.divide.value /= value;
    this.divide.toString = () => this.divide.value;
    this.state = this.divide;
    return this.divide;
  };

  multiply = (value = 0) => {
    if (!this.multiply.value) {
      this.multiply.value = this.state;
    }
    this.multiply.value *= value;
    this.multiply.toString = () => this.multiply.value;
    this.state = this.multiply;
    return this.multiply;
  };

  getResult() {
    return this.state;
  }

  reset() {
    this.state = 0;
    return this.state;
  }

  setState = (value = 0) => {
    if (!this.setState.value) {
      this.setState.value = this.state;
    }
    this.setState.value = value;
    this.setState.toString = () => this.setState.value;
    this.state = this.setState;
    return this.setState;
  };

  fetchData = callback => {
    callback.call(this);
  };
}

const calc = new Calculator();
