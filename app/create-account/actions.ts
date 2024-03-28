"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";

const checkPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const checkUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "이름을 입력해주세요.",
        required_error: "이름을 입력해주세요.",
      })
      .min(PASSWORD_MIN_LENGTH, "6~10글자 이내로 입력하세요.")
      .max(12, "6~10글자 이내로 입력하세요..")
      .trim()
      .refine(checkUsername, "다른 이름을 입력해주세요."),
    email: z
      .string()
      .email("이메일 주소를 확인해주세요")
      .trim()
      .toLowerCase()
      .refine(checkUniqueEmail, "다른 이메일을 사용해주세요."),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, "최소 6글자 이상 10글자 이내로 입력하세요.")
      .max(10, "최소 6글자 이상 10글자 이내로 입력하세요."),
    //.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirmPassword: z
      .string()
      .min(PASSWORD_MIN_LENGTH, "최소 6글자 이상 10글자 이내로 입력하세요.")
      .max(10, "최소 6글자 이상 10글자 이내로 입력하세요."),
  })
  .refine(checkPassword, {
    message: "입력하신 암호가 동일하지 않습니다.",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // check if username is taken
    //check if the email is already used
    //hash password
    //save the user to db
    //log the user in
    //redirect "/home"
  }
}
