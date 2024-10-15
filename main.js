// Parent class
class Software {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    run() {
        console.log(`The software ${this.name} ${this.type} is running.`);
    }
}

// Subclass OperatingSystem
class OperatingSystem extends Software {
    run() {
        console.log(`The software ${this.name} ${this.type} is running advanced.`);
    }
}

// Subclass WordProcessor
class WordProcessor extends Software {
    run() {
        console.log(`Using ${this.name} ${this.type} in Microsoft Word.`);
    }
}

// Function to demonstrate polymorphism
function testRun(software) {
    software.run(); // Calls the run method based on the object type
}

// Creating instances of Software, OperatingSystem, and WordProcessor
const mySoftware = new Software('Windows', '12');
const myOperatingSystem = new OperatingSystem('MS Office', '2022');
const myWordProcessor = new WordProcessor('Chrome', 'Google');

// Using the testRun function to demonstrate polymorphism
testRun(mySoftware);           // Output: The software Windows 12 is running.
testRun(myOperatingSystem);    // Output: The software MS Office 2022 is running advanced.
testRun(myWordProcessor);      // Output: Using Chrome Google in Microsoft Word.
