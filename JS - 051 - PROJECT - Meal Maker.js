//Meal Maker - Project

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
     
    },
  
    ///GETTERS
    get appetizers() {
      return this._courses.appetizers;
    },
  
  
    get mains() {
      return this._courses.mains;
    },
   
  
    get desserts() {
      return this._courses.desserts;
    },
    
  
    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
   },
  ///SETTERS
    
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
     
  
     addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice,
        };
      return this._courses[courseName].push(dish);
    },
  
   getRandomDishFromCourse(courseName){
     const dishes = this.courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
   },
  
   generateRandomMeal() {
     const appetizer = this.getRandomDishFromCourse('appetizers');
     const main = this.getRandomDishFromCourse('mains');
     const dessert = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizer.price + main.price + dessert.price;
     return `Hello Dear, your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the total price is ${totalPrice} `;
   }
  };
  
  //Adding Dish to Course
  menu.addDishToCourse('appetizers', 'Salad', 7.00);
  menu.addDishToCourse('appetizers', 'Chips', 8.00);
  menu.addDishToCourse('appetizers', 'Wings', 9.00);
  
  menu.addDishToCourse('mains', 'Salmon Plate', 13.00);
  menu.addDishToCourse('mains', 'Steak', 15.00);
  menu.addDishToCourse('mains', 'Fish and Chips', 17.00);
  
  menu.addDishToCourse('desserts', 'British Pudding', 6.00);
  menu.addDishToCourse('desserts', 'Salted Caramel Ice Cream', 9.00);
  menu.addDishToCourse('desserts', 'Fruit Salad', 4.00);
  
  
  //Generating Random Meal and logging it!
  const meal = menu.generateRandomMeal();
  console.log(meal);