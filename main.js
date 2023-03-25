function Course(name)
{
  this.name = name
  this.type = "Bachelor of Science in Information Technology"
}
function SecondCourse(name)
{
  this.name = name
  this.type = "Bachelor of Science in Technology Communication Management"
}
function USTPFactory()
{
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Course(name)
        case 2:
          return new SecondCourse(name)
    }
  }
}
function intro()
{
  console.log("Hi, I am " + this.name + " and I'm taking the " + this.type)
}
const ustpFactory = new USTPFactory()
const USTPIANS = []

USTPIANS.push(ustpFactory.create("Brynhel", 1))
USTPIANS.push(ustpFactory.create("Brynhel", 2))

USTPIANS.forEach(ustpFactory =>{
  intro.call(ustpFactory)
})