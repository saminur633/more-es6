class instructor  {
    name;
    designation = ' web course instructor'
    team = 'web team'
    location;
    constructor(name,location){
        this.name = name;
        this.location= location;

    }
    startsupportsession(time){
        console.log(`start the support session ${time}`);

    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }

}
const samin = new instructor('samin','Bangladesh');
console.log(samin);
samin.startsupportsession('10.00');
samin.createQuiz(10);