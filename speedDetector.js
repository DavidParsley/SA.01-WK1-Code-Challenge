function policeRadar(speed){
 let maxSpeedLimit = 70;
 let maxDemerit = 12;

//Conditional statement for someone obeying the speed limit
 if (speed <= maxSpeedLimit){ 
     console.log("Ok");}  
else {
    let speeding = speed - maxSpeedLimit; // calculating how much over the speed they are traveling
    let demerit = 0; // default demerit value
    
    let points = 5; // start counting points at 5 for each 5mph they are above the spped limit
  for (let points = 5; speeding >= points; points += 5) { 
    demerit++;
}  //'for loop' inside the else condition for increment values

// Print the total number of demerits / tickects
console.log(`You have : ${demerit} tickets`); 

//licences suspeded messeage after reaching max tickets 12
if (demerit > maxDemerit){
     console.log("License suspended");}  
else(speed>=180)
    console.log("Bruhv you are most likely dead! Why are you driving more than 180 mph?")
}}

// Type in your speed between the brackets to see your current tickect / license status eg,(90),(70),(40),and (180) (DONT TYPE 180 +)
policeRadar();

//No need to use console.log because I have already used it in the code,
//So just call the function by inserting a number.





    
    
    
    
    
    
    
    
