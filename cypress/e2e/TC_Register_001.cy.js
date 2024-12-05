// Import faker.js
import { faker } from '@faker-js/faker';

describe('TC_Register_001 - การลงทะเบียนด้วยข้อมูลสุ่ม', () => {
  // สร้างข้อมูลแบบสุ่ม
  const userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode('#####'),
    phoneNumber: faker.phone.number('##########'),
    ssn: faker.finance.creditCardNumber('###-##-####'),
    username: faker.internet.userName(),
    password: faker.internet.password(10),
  };

  it('ควรแสดงข้อความยืนยันและพาไปยังหน้า Dashboard เมื่อข้อมูลถูกต้อง', () => {
    // Step 1: เปิดหน้า Register
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    // Step 2: กรอกข้อมูลแบบสุ่มในฟอร์ม
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
    cy.get('input[name="repeatedPassword"]').type(userData.password);

    // Step 3: กดปุ่ม Register
    cy.get('input[type="submit"][value="Register"]')
    //.click();

    
  });
});
