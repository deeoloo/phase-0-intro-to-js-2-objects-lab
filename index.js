// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

//returns an employee with the original key value pairs and the new key value pair
//it does not modify the original employee, but rather returns a clone with the new data

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

//it does not modify the original employee, but rather returns a clone with the new data
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

//Destructive delete which modifies employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

