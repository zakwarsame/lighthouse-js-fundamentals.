const ageCalculator = (name, yearOfBirth, currentYear) => {
    let yearsOld = currentYear - yearOfBirth;
    return `${name} is ${yearsOld} years old.`;
  
  }