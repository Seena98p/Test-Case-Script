describe('TC_Register_002 - การลงทะเบียนเมื่อฟิลด์ที่จำเป็นว่างเปล่า', () => {
    const userData = {
      lastName: 'Doe',
      username: 'johndoe',
      password: 'password123',
      confirmPassword: 'password123',
    };
  
    it('ควรแสดงข้อความข้อผิดพลาดเมื่อฟิลด์ที่จำเป็นว่างเปล่า', () => {
      // Step 1: เปิดหน้า Register
      cy.visit('https://parabank.parasoft.com/parabank/register.htm'); // URL ตัวอย่าง
  
      // Step 2: กรอกข้อมูลที่ระบุ และปล่อยฟิลด์ First Name และ Address ว่างเปล่า
      cy.get('input[name="customer.lastName"]').type(userData.lastName);
      cy.get('input[name="customer.username"]').type(userData.username);
      cy.get('input[name="customer.password"]').type(userData.password);
      cy.get('input[name="repeatedPassword"]').type(userData.confirmPassword);
  
      // Step 3: กดปุ่ม Register
      cy.get('input[type="submit"]')
  
      // Expected Result: ระบบแสดงข้อความข้อผิดพลาด
    //   cy.contains('First Name is required').should('be.visible');
    //   cy.contains('Address is required').should('be.visible');
    });
  });
  