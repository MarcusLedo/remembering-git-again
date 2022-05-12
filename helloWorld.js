var person = {
    name: 'Marcus',
    speak(){
        console.log('Hello, ' + this.name + '!');
    }
}

person.speak();

var speakGlobal = person.speak;

var speakPerson = person.speak.bind(person);

speakGlobal(); //this = global
speakPerson();

var cars = ['BMW', 'HONDA', 'FIAT', 'HYUNDAI'];

cars.forEach((name, index) => console.log(index + 1 + '. ' + name));