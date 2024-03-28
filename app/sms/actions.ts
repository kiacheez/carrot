"use server";

import { redirect } from "next/navigation";
import validator from "validator";
import { z } from "zod";


const phoneSchema = z
  .string()
  .trim()
  .refine((phone) => validator.isMobilePhone(phone, "ko-KR"), "Wrong numbers");
const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
    token: boolean;
  }

export async function smsLogin(
    prevState: ActionState,
    formData: FormData
  ) {
    const phone = formData.get("phone");
    const token = formData.get("token");
    if (!prevState.token) {
      //prevState.token이 false는 action이 처음으로 호출되었다는 의미 initialstate가 prevstate로 이동하기때문
      const result = phoneSchema.safeParse(phone);
      if (!result.success) {
        return {
          token: false,
          error:result.error.flatten()
          
        };
      } else {
        return {
          token: true,
        };
      }
    } else {
      const result = tokenSchema.safeParse(token);
      if (!result.success) {
        return {
          token: true,
          error:result.error.flatten()
        };
      } else {
        redirect("/")
      }
    }
  }
  