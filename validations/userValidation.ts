import { z } from "zod"

export const changeFullnameValidation = z
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
      .max(40, { message: "Ad soyad maksimum 40 karakter olmalıdır." })
      .refine(
        (value) => {
          const words = value.split(" ")

          if (words.length === 1) {
            return false
          }

          return true
        },
        {
          message: "Ad soyad en az 2 kelime olmalıdır.",
        }
      ),
  })
  .required()

export const changeEmailValidation = z
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

export const changePasswordValidation = z
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
  })
  .required()
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Şifreler eşleşmiyor, lütfen girdiğiniz şifreleri kontrol edin.",
    path: ["passwordConfirm"],
  })

export const changeNotificationValidation = z.object({
  isEmailSubscribe: z.boolean(),
})
