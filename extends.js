class Teammember {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    provideFeedback() {
        console.log(`${this.name}, thank you for your feedback`);
    }
}

class Instructor extends Teammember {
    constructor(name, location) {
        super(name, location);
        this.designation = 'web course instructor';
        this.team = 'web team';
    }

    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }

    createQuiz(module) {
        console.log(`Please create a quiz for module ${module}`);
    }
}

class Developer extends Teammember {
    constructor(name, location, tech) {
        super(name, location);
        this.designation = 'web developer';
        this.team = 'web team';
        this.tech = tech;
    }

    developFeature(feature) {
        console.log(`Developing feature: ${feature}`);
    }

    release(version) {
        console.log(`Releasing version ${version}`);
    }
}

class JobPlacement extends Teammember {
    constructor(name, location, region) {
        super(name, location);
        this.designation = 'job placement commando';
        this.team = 'job placement';
        this.region = region;
    }

    provideResume(student) {
        console.log(`Providing resume support for ${student}`);
    }

    prepareStudent(module) {
        console.log(`Preparing students for module ${module}`);
    }
}

const samin = new Developer('Samin', 'Dhaka', 'React');
console.log(samin);
samin.provideFeedback();
