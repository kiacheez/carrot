"use client";

import FormInput from "@/components/form-input";
import VerificationBtn from "@/components/verificaiotn-btn";
import { useFormState } from "react-dom";
import { smsLogin } from "./actions";
import SocialLogin from "@/components/social-login";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2>fill in the form</h2>
      </div>
      <form action={dispatch} className="flex flex-row space-x-3 -mt-6 ">
        <FormInput
          name="phone"
          type="text"
          placeholder="휴대전화번호"
          required
          errors={state.error?.formErrors}
        />
        {state.token ? (
          <FormInput
            name="token"
            type="number"
            placeholder="인증번호"
            required
            minLength={100000}
            maxLength={999999}
            errors={state.error?.formErrors}
          />
        ) : null}
        <VerificationBtn text={state.token ? "인증하기" : "인증문자 보내기"} />
      </form>
      <SocialLogin />
    </div>
  );
}
