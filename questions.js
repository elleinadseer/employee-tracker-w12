const MainMenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            { value: 'view_employees', name: "View All Employees" },
            { value: 'add_employee', name: "Add Employee" },
            { value: 'update_role', name: "Update Employee Role" },
            { value: 'view_roles', name: "View All Roles" },
            { value: 'add_role', name: "Add Role" },
            { value: 'view_departments', name: "View All Departments" },
            { value: 'add_department', name: "Add Department" },
        ],
    },
];

const AddDepartmentQuestions = [
    {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the department?'
    },
];

const AddRoleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the role?'
    },
    {
        type: 'number', name: 'salary', message: 'What is the salary of the role?',
        validate: function(value) {
            const valid = !isNaN(parseInt(value));
            return valid || "Please enter a number";
        }
    },
    {
        type: 'list', 
        name: 'department_id',
        message: 'Which department does the role belong to?',
        choices: [ // Added later
        ],
    },
];

const AddEmployeeQuestions = [
    {
        type: 'input', 
        name: 'first_name',
        message: 'What is the employee\'s first name?',
    },
    {
        type: 'input', 
        name: 'last_name',
        message: 'What is the employee\'s last name?',
    },
    {
        type: 'list', 
        name: 'role_id',
        message: 'What is the employee\'s role?',
        choices: [ // Add later
        ], 
    },
    {
        type: 'list', 
        name: 'manager_id',
        message: 'Who is the employee\'s manager?',
        choices: [ // Add later
        ], 
    },
];

const UpdateEmployeeRoleQuestions = [
    {
        type: 'list', 
        name: 'employee_id',
        message: 'Which employee\'s role do you want to update?',
        choices: [ // Add later
        ], 
    },
    {
        type: 'list', 
        name: 'role_id',
        message: 'Which role do you want to assign the selected employee?',
        choices: [ // Add later
        ], 
    },
]

module.exports = { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions}
