import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly occupationSelect: Locator;
    readonly genderMaleRadio: Locator;
    readonly genderFemaleRadio: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly ageConsentCheckbox: Locator;
    readonly registerButton: Locator;
    readonly loginLink: Locator;
    readonly errorMessage: Locator;
    readonly accountExistsError: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.phoneInput = page.locator('#userMobile');
        this.occupationSelect = page.locator('select');
        this.genderMaleRadio = page.locator('input[value="Male"]');
        this.genderFemaleRadio = page.locator('input[value="Female"]');
        this.passwordInput = page.locator('#userPassword');
        this.confirmPasswordInput = page.locator('#confirmPassword');
        this.ageConsentCheckbox = page.locator('input[type="checkbox"]');
        this.registerButton = page.locator('#login');
        this.loginLink = page.locator('a[href*="login"]');
        this.errorMessage = page.locator('.toast-message');
        this.accountExistsError = page.locator('.toast-message:has-text("Account already exists")');
        this.successMessage = page.locator('.toast-message:has-text("Registration Successful")');
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async enterFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPhone(phone: string) {
        await this.phoneInput.fill(phone);
    }

    async selectOccupation(occupation: string) {
        await this.occupationSelect.selectOption(occupation);
    }

    async selectGender(gender: 'Male' | 'Female') {
        if (gender === 'Male') {
            await this.genderMaleRadio.check();
        } else {
            await this.genderFemaleRadio.check();
        }
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    async checkAgeConsent() {
        await this.ageConsentCheckbox.check();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async register(userData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        occupation: string;
        gender: 'Male' | 'Female';
        password: string;
        confirmPassword: string;
    }) {
        await this.enterFirstName(userData.firstName);
        await this.enterLastName(userData.lastName);
        await this.enterEmail(userData.email);
        await this.enterPhone(userData.phone);
        await this.selectOccupation(userData.occupation);
        await this.selectGender(userData.gender);
        await this.enterPassword(userData.password);
        await this.enterConfirmPassword(userData.confirmPassword);
        await this.checkAgeConsent();
        await this.clickRegisterButton();

                // ⬇ Detect result
        if (await this.accountExistsError.isVisible()) {
            return 'ACCOUNT_EXISTS';
        }

        if (await this.successMessage.isVisible()) {
            return 'SUCCESS';
        }

        return 'VALIDATION_ERROR';
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}
