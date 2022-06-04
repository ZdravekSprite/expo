import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { SetStateAction } from "react";
import { BASE_URL, TEST_EMAIL, TEST_NAME, TEST_TOKEN, TEST_PASS } from "../config";
import { UserInfo } from "../contexts/AuthContext";

export function logIn(): Promise<UserInfo> {
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

export function login(email: string | undefined, password: string | undefined, setUserInfo: { (value: SetStateAction<UserInfo | null>): void }) {
  console.log(email, TEST_EMAIL);
  console.log(password, TEST_PASS);
  axios
    .post(`${BASE_URL}/login`, {
      email: email ?? TEST_EMAIL,
      password: password ?? TEST_PASS,
    })
    .then(res => {
      const response: UserInfo = res.data;
      const userInfo = {
        token: response.token,
        user: {
          name: response.user.name,
          email: response.user.email,
        },
      };
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log(userInfo);
    })
    .catch(e => {
      console.log(`login error ${e}`);
    });
}

export function register(name: string | undefined, email: string | undefined, password: string | undefined, password_confirmation: string | undefined, setUserInfo: { (value: SetStateAction<UserInfo | null>): void }) {
  console.log(name, TEST_NAME);
  console.log(email, TEST_EMAIL);
  console.log(password, TEST_PASS);
  axios
    .post(`${BASE_URL}/register`, {
      name: name ?? TEST_NAME,
      email: email ?? TEST_EMAIL,
      password: password ?? TEST_PASS,
      password_confirmation: password_confirmation ?? TEST_PASS,
    })
    .then(res => {
      const response: UserInfo = res.data;
      const userInfo = {
        token: response.token,
        user: {
          name: response.user.name,
          email: response.user.email,
        },
      };
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log(userInfo);
    })
    .catch(e => {
      console.log(`register error ${e}`);
    });
}

export function logout(userInfo: UserInfo, setUserInfo: { (value: SetStateAction<UserInfo | null>): void }) {
  console.log(userInfo);
  axios
    .post(
      `${BASE_URL}/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      })
    .then(res => {
      console.log(res.data);
      /*
      AsyncStorage.clear().then(() => {
        setUserInfo(null);
      });
      */
      setUserInfo(null);
      AsyncStorage.removeItem('userInfo');
    })
    .catch(e => {
      console.log(`logout error ${e}`);
    });
}