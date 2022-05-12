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