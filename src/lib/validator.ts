import { ErrorTypes } from "@/types/form";
import { getDefaultError } from "@/lib/form";

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;

};

export const isValidName = (name: string): boolean => {
  return name.length > 4;
};

export const isValidUsername = (username: string): boolean => {
  if (username.length < 4) {
    return false;
  }

  return username.charAt(0) !== "@";
};

export const chatAllDataValid = (
  data: {
    fullName: string | undefined,
    UName: string | undefined,
    email: string | undefined,
    password: string | undefined,
  },
  env: boolean
): ErrorTypes | null => {
  const { email, password, fullName, UName } = data;
  const errors: ErrorTypes = getDefaultError();

  if (!env) {
    if (!fullName || !isValidName(fullName)) {
      errors.fullName.error = true;
      errors.fullName.message = "Invalid full name";
    }

    if (!UName || !isValidUsername(UName)) {
      errors["u-name"].error = true;
      errors["u-name"].message = "Invalid username";
    }
  }

  if (!email || !isValidEmail(email)) {
    errors.email.error = true;
    errors.email.message = "Invalid email";
  }

  if (!password || !isValidPassword(password)) {
    errors.password.error = true;
    errors.password.message = "Invalid password";
  }

  return !Object.values(errors).some((error) => error) ? null : errors;
};
