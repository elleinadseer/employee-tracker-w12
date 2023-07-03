const Database = require('/Users/danielle/bootcamp/employee-tracker-w12/db/Database.js');

// Employee database class extended from Database class from Database.js
class EmployeeDatabase extends Database {
    constructor(options) {
        super(options);
    }

    // Select all from department
    getDepartments() {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM department', (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    // Select roles 
    getRoles() {

        return new Promise ((resolve, reject) => {
            this.db.query(`SELECT role.id, role.title, role.salary, department.name as department_name FROM role INNER JOIN Department ON role.department_id = Department.id`, (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
            });
        });
     }

     // Select employee info
     getEmployees() {

        return new Promise((resolve, reject) => {
            this.db.query(
                `SELECT
                employee.id,
                employee.first_name,
                employee.last_name,
                role.title as role_title,
                role.salary as role_salary,
                department.name as department_name
                FROM employee
                INNER JOIN role ON employee.role_id = role.id
                INNER JOIN department ON role.department_id = department.id
                LEFT JOIN employee as manager ON employee.manager_id = manager.id`
                , (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            )}
            )}

            // Create new department
    addDepartment(department) {
        return new Promise((resolve, reject) => {
            this.db.query ('INSERT INTO department SET ?', { name: department.department_name }, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(`Department ${department.department_name} successfully added.`);
            });
        });
    }

    // Create new role
    addRole(role) {

        const roleData = {
            title: role.title,
            salary: role.salary,
            department_id: role.department_id
        };

        return new Promise ((resolve, reject) => {
            this.db.query('INSERT INTO role SET ?', roleData, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve( `Role ${role.title} successfully added.`)
            })
        }) 
    }

    // Create new employee
    addEmployee(employee) {

        const employeeData = {
            first_name: employee.first_name,
            last_name: employee.last_name,
            role_id: employee.role_id,
            manager_id: employee.manager_id,
        };

        return new Promise ((resolve, reject) => {
            this.db.query('INSERT INTO employee SET ?', employeeData, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(`${employee.first_name} ${employee.last_name} successfully added.`)
            })
        }) 
    }

    // Update employee role
    updateEmployeeRole(employee) {

        return new Promise ((resolve, reject) => {
            this.db.query('UPDATE employee SET role_id=? WHERE id=?', [employee.role_id, employee.employee_id], (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(`Role successfully changed.`)
            });
        })
    }
};

module.exports = EmployeeDatabase;