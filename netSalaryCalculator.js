function netSalaryCalculator(salary, benefits){
   
    const nhifDeduction = 925; 
    //I set the default NHIF deduction to 925 because its the median between 150 and 1,700 (amount expected to be paid for salaries 0 to 100,000 and above)
    //those are the figues that have been provided by the NHIF link.

    const nssfContribution = 6 / 100; // The most an employee can contirbute to NSSF is 6% (according to the assignemt link)
    let nssfMaximumContribution = 1080;// The official NSSF website(https://www.nssf.or.ke/new-rates-facts) states that 
    //there is a 1080 maximum cap that employee are required to pay regardless of their salary.

    // PAYE tax rates 
    let payeTax = 0; //  default 0 incase user dosent have a taxable income
    const grossSalary = salary + benefits;
    
    // Annual Taxable Pay calculation (I prefer to write number 10 / 100 ) compared to(0.10) decimals its less confussing to me
    if (grossSalary <= 24000) {
      payeTax = grossSalary * (10 / 100); // 10% for up to Ksh 24,000
  } else if (grossSalary <= 32333) {
      payeTax = (24000 * (10 / 100)) + ((grossSalary - 24000) * (25 / 100)); // 25% for Ksh 24,001 - 32,333
  } else if (grossSalary <= 500000) {
      payeTax = (24000 * (10 / 100)) + (8333 * (25 / 100)) + ((grossSalary - 32333) * (30 / 100)); // 30% for Ksh 32,334 - 500,000
  } else if (grossSalary <= 800000) {
      payeTax = (24000 * (10 / 100)) + (8333 * (25 / 100)) + (166667 * (30 / 100)) + ((grossSalary - 500000) * (32.5 / 100)); // 32.5% for Ksh 500,001 - 800,000
  } else {
      payeTax = (24000 * (10 / 100)) + (8333 * (25 / 100)) + (166667 * (30 / 100)) + (300000 * (32.5 / 100)) + ((grossSalary - 800000) * (35 / 100)); // 35% for above Ksh 800,000
  }
  
    // Calculating NSSF deductions 
    let nssfDeductions = grossSalary * nssfContribution;
    if (nssfDeductions > nssfMaximumContribution) {
        nssfDeductions = nssfMaximumContribution; 
    }
    // Calculating total deductions
    const totalDeductions = payeTax + nhifDeduction + nssfDeductions;
    // Calculating Net Salary
    const netSalary = grossSalary - totalDeductions;
    // Print the output using interpolation
    console.log(`Salary = Ksh ${salary}`);
    console.log(`Benefits = Ksh ${benefits}`);
    console.log(`Gross Salary = Ksh ${grossSalary}`);
    console.log(`PAYE (Tax) = Ksh ${payeTax}`);
    console.log(`NHIF Deductions = Ksh ${nhifDeduction}`);
    console.log(`NSSF Deductions = Ksh ${nssfDeductions}`);
    console.log(`Total Deductions = Ksh ${totalDeductions}`);
    console.log(`Net Salary = Ksh ${netSalary}`);
}
// Type in your Salary and Benefits in the brackets to get your Net Salary
//No need to use console.log because I have already used it in the code,
netSalaryCalculator(0, 0);
