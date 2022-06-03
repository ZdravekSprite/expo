import { TEST_EMAIL, TEST_NAME, TEST_TOKEN } from "../config";

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: TEST_TOKEN,
        user: {
          name: TEST_NAME,
          email: TEST_EMAIL,
        },
      });
    }, 2000);
  });
}