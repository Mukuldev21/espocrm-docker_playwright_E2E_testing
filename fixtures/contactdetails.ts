export function generateContactDetails() {

    const RandomFirstName = [
        'John', 'Jane', 'Bob', 'Alice', 'Mike', 'Sara', 'Tom', 'Lily', 'Mark', 'Emily',
        'David', 'Sarah', 'Michael', 'Emma', 'William', 'Olivia', 'James', 'Sophia', 'Robert', 'Isabella',

        // More common names
        'Daniel', 'Jessica', 'Chris', 'Hannah', 'Matthew', 'Laura', 'Andrew', 'Rachel', 'Brian', 'Victoria',
        'Joseph', 'Anna', 'Kevin', 'Megan', 'Paul', 'Natalie', 'Steven', 'Chloe', 'George', 'Grace',
        'Anthony', 'Julia', 'Patrick', 'Amber', 'Peter', 'Nicole', 'Samuel', 'Ella', 'Benjamin', 'Madison',
        'Jacob', 'Abigail', 'Ethan', 'Charlotte', 'Joshua', 'Amelia', 'Ryan', 'Claire', 'Nathan', 'Zoe'
    ];
    const RandomLastName = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
        'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
        'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
        'Walker', 'Young', 'Allen', 'King', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
        'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez',
        'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart'
    ];
    const uniqueId = Math.random().toString(36).substring(2, 7); // 5 char random string for email only
    const firstName = RandomFirstName[Math.floor(Math.random() * RandomLastName.length)]
    const lastName = RandomLastName[Math.floor(Math.random() * RandomLastName.length)]
    const email = `${firstName}.${lastName}${uniqueId}@gmail.com`;
    const phoneNumber = Math.floor(Math.random() * 1000000000).toString();
    const description = 'Naruto is a ninja';

    return {
        firstName,
        lastName,
        email,
        phoneNumber,
        description
    }

}