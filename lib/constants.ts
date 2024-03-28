export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_REGEX = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
  ); //최소 하나의 대문자, 소문자, 숫자, 특수문자조합

export const PASSWORD_REGEX_ERROR = "최소1개의 대문자, 소문자, 숫자, 특수문자(@#$%^!)를 포함해야합니다."