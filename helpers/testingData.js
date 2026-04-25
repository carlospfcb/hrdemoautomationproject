const testingData = {
    urls: {
        loginpage: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        homepage: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    },
    validCredentials: {
        username: 'Admin',
        password: 'admin123'
    },
    invalidCredentials: {
        invalidUsername: 'Adminwrong',
        invalidPassword: 'passwordwrong'
    },
    employeeInfo: {
        firstName: 'John',
        lastName: 'Doe',
        employeeId: '12345',
        existingEmployeeId: '0295'
    },
    candidateInfo: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        vacancy: 'Junior Account Assistant'
    },
    assignLeaveInfo: {
        employeeName: 'Amelia Brown',
        leaveType: 'CAN - Bereavement', 
        fromDate: '2026-01-06',
        toDate: '2026-01-06',
        duration: 'Half Day - Morning',
        comment: 'Testing le6ave assignment'
    }

};

module.exports = testingData;