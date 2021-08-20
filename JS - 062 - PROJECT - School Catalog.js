// School Catalogue

class School {

  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

   get name() {
    return this._name;
  }
   get level() {
    return this._level;
  }
   get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (value.isNaN()) {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = value;
    }
 }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[randInt];

  }
}

class PrimarySchool extends School {

  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {

  constructor(name, numberOfStudents, sportTeams) {
    super(name, 'high', numberOfStudents);
    this._sportTeams = sportTeams;
  }

  get sportTeams() {
    return this.sportTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
