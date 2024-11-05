import axios from "axios";

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

  return username.charAt(0) === "@";
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
  let isError = false;

  if (!env) {
    if (!fullName || !isValidName(fullName)) {
      isError = true;
      errors.fullName.error = true;
      errors.fullName.message = "Invalid full name";
    }

    if (!UName || !isValidUsername(UName)) {
      isError = true;
      errors["u-name"].error = true;
      errors["u-name"].message = "Invalid username";
    }
  }

  if (!email || !isValidEmail(email)) {
    isError = true;
    errors.email.error = true;
    errors.email.message = "Invalid email";
  }

  if (!password || !isValidPassword(password)) {
    isError = true;
    errors.password.error = true;
    errors.password.message = "Invalid password";
  }

  if(isError) {
    return errors;
  } 
  return null;
};

export const isValidRepoUrl = async (url: string): Promise<boolean> => {
  try {
      // Extract owner and repo from the URL
      const match = url.match(/github\.com\/([\w-]+)\/([\w-]+)(?:\.git)?$/);

      if (!match) {
          return false;
      }

      const [, owner, repo] = match;

      // GitHub API endpoint to check repo existence
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

      // Make a GET request to the GitHub API
      const response = await axios.get(apiUrl);

      // If status is 200, the repository exists
      return response.status === 200;
  } catch (error) {
      // If the error response status is 404, the repository doesn't exist
      if (axios.isAxiosError(error) && error.response?.status === 404) {
          return false;
      }
      // Re-throw any unexpected errors
      throw error;
  }
};
