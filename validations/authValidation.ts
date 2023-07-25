import * as z from "zod"

//SIGN-IN VALIDATION
export const signInValidation = z
  .object({
    emailAddress: z
      .string({
        required_error: "Lütfen bir e-posta adresi girin.",
        invalid_type_error: "E-posta adresi normal metin olmalıdır.",
      })
      .trim()
      .min(3, {
        message: "E-posta adresi minimum 3 karakter olmalıdır.",
      })
      .max(254, {
        message: "E-posta adresi maksimum 254 karakter olmalıdır.",
      })
      .email({ message: "Lütfen geçerli bir e-posta adresi girin." })
      .toLowerCase(),

    password: z
      .string({
        required_error: "Lütfen bir şifre girin.",
        invalid_type_error: "Şifre normal metin olmalıdır.",
      })
      .trim()
      .min(10, {
        message: "Şifre minimum 10 karakter olmalıdır.",
      })
      .max(60, {
        message: "Şifre maksimum 60 karakter olmalıdır.",
      }),
    rememberMe: z.boolean().default(false),
  })
  .required()

//SIGN-UP VALIDATION
export const signUpValidation = z
  .object({
    fullName: z
      .string({
        required_error: "Lütfen bir ad soyad girin.",
        invalid_type_error: "Ad soyad normal metin olmalıdır.",
      })
      .trim()
      .min(5, {
        message: "Ad soyad minimum 5 karakter olmalıdır.",
      })
      .max(40, { message: "Ad soyad maksimum 40 karakter olmalıdır." }),

    emailAddress: z
      .string({
        required_error: "Lütfen bir e-posta adresi girin.",
        invalid_type_error: "E-posta adresi normal metin olmalıdır.",
      })
      .trim()
      .min(3, {
        message: "E-posta adresi minimum 3 karakter olmalıdır.",
      })
      .max(254, {
        message: "E-posta adresi maksimum 254 karakter olmalıdır.",
      })
      .email({ message: "Lütfen geçerli bir e-posta adresi girin." })
      .toLowerCase(),

    password: z
      .string({
        required_error: "Lütfen bir şifre girin.",
        invalid_type_error: "Şifre normal metin olmalıdır.",
      })
      .trim()
      .min(10, {
        message: "Şifre minimum 10 karakter olmalıdır.",
      })
      .max(60, {
        message: "Şifre maksimum 60 karakter olmalıdır.",
      }),

    passwordConfirm: z.string({
      required_error: "Lütfen şifrenizi onaylayın.",
    }),

    isEmailSubscribe: z.boolean().default(true),
  })
  .required()
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Şifreler eşleşmiyor, lütfen girdiğiniz şifreleri kontrol edin.",
    path: ["passwordConfirm"],
  })

//FORGOT PASSWORD STEPS
export const forgotPasswordStep1Validation = z
  .object({
    emailAddress: z
      .string({
        required_error: "Lütfen bir e-posta adresi girin.",
        invalid_type_error: "E-posta adresi normal metin olmalıdır.",
      })
      .trim()
      .min(3, {
        message: "E-posta adresi minimum 3 karakter olmalıdır.",
      })
      .max(254, {
        message: "E-posta adresi maksimum 254 karakter olmalıdır.",
      })
      .email({ message: "Lütfen geçerli bir e-posta adresi girin." })
      .toLowerCase(),
  })
  .required()

export const forgotPasswordStep2Validation = z
  .object({
    password: z
      .string({
        required_error: "Lütfen bir şifre girin.",
        invalid_type_error: "Şifre normal metin olmalıdır.",
      })
      .trim()
      .min(10, {
        message: "Şifre minimum 10 karakter olmalıdır.",
      })
      .max(60, {
        message: "Şifre maksimum 60 karakter olmalıdır.",
      }),

    passwordConfirm: z.string({
      required_error: "Lütfen şifrenizi onaylayın.",
    }),
    confirmationCode: z
      .string({
        required_error: "Lütfen bir doğrulama kodu girin.",
        invalid_type_error: "Doğrulama kodu normal metin olmalıdır.",
      })
      .nonempty({ message: "Lütfen bir doğrulama kodu girin." }),
  })
  .required()
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Şifreler eşleşmiyor, lütfen girdiğiniz şifreleri kontrol edin.",
    path: ["passwordConfirm"],
  })
