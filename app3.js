var employee1 ={
    
    name : "Biswajit Sahu",
    age : 23,
    salary : 30000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee2 ={
    
    name : "Tapati Raj",
    age : 23,
    salary : 40000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee3 ={
    
    name : "Anisha Kumari",
    age : 24,
    salary : 20000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee4 ={
    
    name : "Piyush Kumar",
    age : 25,
    salary : 30000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee5 ={
    
    name : "Rajiv Ranjan",
    age : 25,
    salary : 35000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560076
    }
}
 
  var employeeArray = [];
employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);
employeeArray.push(employee4);
employeeArray.push(employee5);

console.log(employeeArray[2].name);
console.log(employeeArray[2].age);
console.log(employeeArray[2].salary);
console.log(employeeArray[2].address.city);
console.log(employeeArray[2].address.state);
console.log(employeeArray[2].address.pincode);
