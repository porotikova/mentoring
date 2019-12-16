class Room {
  constructor(devices) {
    this.devices = devices;
  }

  searchDevice(value) {
    return this.devices.filter(element => element.name === value);
  }
}

class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isTurnOn = false;
  }

  isTurn() {
    if (!this.isTurnOn) {
      this.isTurnOn = true;
    }
    return;
  }
}

class PersonalComputer extends Device {
  constructor(name, power, storage, ram) {
    super(name, power);
    this.storage = storage;
    this.ram = ram;
  }
}

class SmartPhone extends Device {
  constructor(name, power, battery, diagonal) {
    super(name, power);
    this.battery = battery;
    this.diagonal = diagonal;
  }
}

console.log('--------------------------------------------------------');
const lamp = new Device('edison', 12);
const personalComputer = new PersonalComputer('hp', 400, 1000, 16);
const smartPhone = new SmartPhone('huawei', 20, 4200, 6);
const room = new Room([lamp, personalComputer, smartPhone]);
lamp.isTurn();
personalComputer.isTurn();
console.log(room.searchDevice('huawei'));
