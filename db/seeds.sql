INTO department (id, name) VALUES (1, 'Sales');
INTO department (id, name) VALUES (2, 'Engineering');
INTO department (id, name) VALUES (3, 'Finance');
INTO department (id, name) VALUES (4, 'Legal');

INTO role (id, title, salary, department_id) VALUES (1, 'Sales Lead', 100000, 1);
INTO role (id, title, salary, department_id) VALUES (2, 'Salesperson', 80000, 1);
INTO role (id, title, salary, department_id) VALUES (3, 'Lead Engineer', 150000, 2);
INTO role (id, title, salary, department_id) VALUES (4, 'Software Engineer', 120000, 2);
INTO role (id, title, salary, department_id) VALUES (5, 'Account Manager', 160000, 3);
INTO role (id, title, salary, department_id) VALUES (6, 'Accountant', 125000, 3);
INTO role (id, title, salary, department_id) VALUES (7, 'Legal Team Lead', 250000, 4);
INTO role (id, title, salary, department_id) VALUES (8, 'Lawyer', 190000, 4);

INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'Doe', 1, NULL)
INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Mike', 'Chan', 2, 1)
INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Ashley', 'Rodriguez', 3, NULL)
INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Kevin', 'Tupik', 4, 3)
INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Kunal', 'Singh', 5, NULL)
INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Malia', 'Brown', 6, 5)
INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Sarah', 'Lourd', 7, NULL)
INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Tom', 'Allen', 8, 7)