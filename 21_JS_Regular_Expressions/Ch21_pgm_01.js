
function is_valid_variable(name) {
    // Regular expression for valid JavaScript variable names
    const regex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  
    // Test the variable name against the regular expression
    return regex.test(name);
  }
  
  // Test cases
  console.log(is_valid_variable('first_name')); // True
  console.log(is_valid_variable('first-name')); // False
  console.log(is_valid_variable('1first_name')); // False
  console.log(is_valid_variable('firstname')); // True
  
