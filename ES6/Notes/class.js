//Class in ES6 is special type of function with almost all the features that OOPS class should have


// class MyClass{ //uses class keyword
//     constructor(){}//initializa the class object
//     method(){}//functions to provide behaviour that we expect from the class
// }


class Vaccination {
  constructor(name, price) {
      this.VaccineName = name
      this.VaccinePrice = price
      this.ScheduleDate = new Date()
  }

  getVaccineDetails = function (availability) {
      return {
          Name : this.VaccineName,
          Price : this.VaccinePrice,
          Available : availability ? "Yes" : "No"
      }
  }

  getSchedule = ()=>{
      return {
          Name : this.VaccineName,
          Price : this.VaccinePrice,
          Schedule : this.ScheduleDate.toLocaleString()
      }
  }
}

let vaccinationSlot = new Vaccination("PFizer", "$100")

console.log(vaccinationSlot.getVaccineDetails(true));
console.log(vaccinationSlot.getSchedule());

//Question : create a class to calculate area of anything - rectangle, circle, one object of your choice

class Area{
  constructor(l = 0, w = 0, r = 0){
    
    this.len = l;
    this.width = w;
    this.radius = r;
    
  }  

  calculateA = () =>{
      if(this.radius == 0){
    return this.len * this.width;
    }
     else{
      return Math.PI * Math.pow(this.radius,2)
    }
  } 
}