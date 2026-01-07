import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../../../pages/RegisterPage';

test.describe('Register Tests - Valid Data', () => { { mode: 'serial' }

  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto('https://rahulshettyacademy.com/client/#/auth/register');
  });

  test('User should be able to register with valid data', async ({ page }) => {

    await registerPage.register({
      firstName: 'John11',
      lastName: 'Doe11',
      email: `john${Date.now()}@example.com`, // avoid duplicate user
      phone: '1234567890',
      occupation: 'Engineer',
      gender: 'Male',
      password: 'Password@123',
      confirmPassword: 'Password@123'
    });

    await expect(
      page.getByRole('heading', { name: 'Account Created Successfully' })
    ).toBeVisible();
  });

  test('User should see error if account already exists', async ({ page }) => {

    await registerPage.register({
      firstName: 'John',
      lastName: 'Doe',
      email: 'existing.user@gmail.com',
      phone: '1234567890',
      occupation: 'Engineer',
      gender: 'Male',
      password: 'Password@123',
      confirmPassword: 'Password@123'
    });

    await expect(
      page.getByRole('alert', { name: 'User already exisits with this Email Id!' })
    ).toBeVisible();
  });

});
