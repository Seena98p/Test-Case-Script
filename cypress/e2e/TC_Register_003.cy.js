describe('TC_Register_003 - การลงทะเบียนเมื่อรหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน', () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main Street',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      phoneNumber: '1234567890',
      ssn: '123-45-6789',
      username: 'johndoe',
      password: 'password123', // Password
      confirmPassword: 'password321', // Mismatched Confirm Password
    };
  
    it('ควรแสดงข้อความข้อผิดพลาดเมื่อรหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน', () => {
      // Step 1: เปิดหน้า Register
      cy.visit('https://parabank.parasoft.com/parabank/register.htm'); // URL ตัวอย่าง
  
      // Step 2: กรอกข้อมูลในฟิลด์ทั้งหมด
      cy.get('input[name="customer.firstName"]').type(userData.firstName);
      cy.get('input[name="customer.lastName"]').type(userData.lastName);
      cy.get('input[name="customer.address.street"]').type(userData.address);
      cy.get('input[name="customer.address.city"]').type(userData.city);
      cy.get('input[name="customer.address.state"]').type(userData.state);
      cy.get('input[name="customer.address.zipCode"]').type(userData.zipCode);
      cy.get('input[name="customer.phoneNumber"]').type(userData.phoneNumber);
      cy.get('input[name="customer.ssn"]').type(userData.ssn);
      cy.get('input[name="customer.username"]').type(userData.username);
      cy.get('input[name="customer.password"]').type(userData.password);
      cy.get('input[name="repeatedPassword"]').type(userData.confirmPassword);
  
      // Step 3: กดปุ่ม Register
      cy.get('input[type="submit"]').click();
  
      // Expected Result: ระบบแสดงข้อความข้อผิดพลาด
      cy.contains('Passwords do not match').should('be.visible');
  
      // ตรวจสอบว่าระบบไม่พาผู้ใช้ไปยังหน้า Dashboard
      cy.url().should('not.include', '/overview.htm');
    });
  });
  