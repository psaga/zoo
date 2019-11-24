/* Author: Pablo Sagastizabal */

let animals = [];

class Animal {
  constructor(sound) {
    /* Any animal has a variable for the sound no matter what values is. */ 
    this.sound = sound;
  }

  /* Speak is a common method for any animal. */
  speak(message) {
    const splited_message = message.split(" ");
    let animal_message = "";
    for (let idx = 0; idx < splited_message.length; idx++) {
        /* Interspersing the message with the animal's sound. */
      animal_message = `${animal_message}${splited_message[idx]} ${this.sound} `;
    }
    return animal_message;
  }
}

/* To complete an example I created few animals. */

class Chicken extends Animal {
  constructor() {
    /* There isn't anything else to initialize. */

    /* super to call the animal's constructor. */
    super("chirp");
  }
}
class Cow extends Animal {
  constructor() {
    super("moo");
  }
}

class Duck extends Animal {
  constructor() {
    super("quack");
  }
}

class Frog extends Animal {
  constructor() {
    super("ribbit");
  }
}

class Goat extends Animal {
  constructor() {
    super("baa");
  }
}

class Horse extends Animal {
  constructor() {
    super("neigh");
  }
}

class Lion extends Animal {
  constructor() {
    super("roar");
  }
}

class Owl extends Animal {
  constructor() {
    super("hoot");
  }
}

class Pig extends Animal {
  constructor() {
    super("oink");
  }
}

class Tiger extends Animal {
  constructor() {
    super("grrr");
  }
}


initAnimals();

function initAnimals() {
  animals.push(new Chicken());
  animals.push(new Cow());
  animals.push(new Duck());
  animals.push(new Frog());
  animals.push(new Goat());
  animals.push(new Horse());
  animals.push(new Lion());
  animals.push(new Owl());
  animals.push(new Pig());
  animals.push(new Tiger());
}

function makeAnimalsSpeak() {
    const message = message_box.value;
    for (let idx = 0; idx < animals.length; idx++) {
        document.getElementById(`speach_${animals[idx].sound}`).innerHTML = animals[idx].speak(message);
    }

}