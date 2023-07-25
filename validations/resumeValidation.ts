import * as z from "zod"

export const personalInfoValidation = z.object({
  jobTitle: z
    .string({
      invalid_type_error: "İş rolü normal metin olmalıdır.",
    })
    .nonempty({ message: "Lütfen bir iş rolü girin." })
    .trim()
    .max(70, {
      message: "İş rolu maksimum 70 karakter olmalıdır.",
    }),
  firstName: z
    .string({
      invalid_type_error: "İsim normal metin olmalıdır.",
    })
    .nonempty({ message: "Lütfen bir isim girin." })
    .max(30, {
      message: "İsim maksimum 30 karakter olmalıdır.",
    })
    .trim(),
  lastName: z
    .string({
      invalid_type_error: "Soy isim normal metin olmalıdır.",
    })
    .nonempty({ message: "Lütfen bir soy isim girin." })
    .max(30, {
      message: "İsim maksimum 30 karakter olmalıdır.",
    })
    .trim(),
  emailAddress: z
    .string({
      invalid_type_error: "E-posta adresi normal metin olmalıdır.",
    })
    .nonempty({ message: "Lütfen bir e-posta adresi girin." })
    .trim()
    .min(3, {
      message: "E-posta adresi minimum 3 karakter olmalıdır.",
    })
    .max(254, {
      message: "E-posta adresi maksimum 254 karakter olmalıdır.",
    })
    .email({ message: "Lütfen geçerli bir e-posta adresi girin." })
    .toLowerCase(),
  phoneNumber: z
    .string({
      required_error: "Lütfen bir telefon numarası girin.",
      invalid_type_error: "Telefon numarası normal metin olmalıdır.",
    })
    .nonempty({ message: "Lütfen bir telefon numarası girin." })
    .trim(),
  country: z
    .string({
      invalid_type_error: "Ülke normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  city: z
    .string({
      invalid_type_error: "Şehir normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  address: z
    .string({
      invalid_type_error: "Adres normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  zipCode: z
    .string({
      invalid_type_error: "Posta kodu normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  nationality: z
    .string({
      invalid_type_error: "Milliyet/Irk normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  drivingLicense: z
    .string({
      invalid_type_error: "Ehliyet normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  placeOfBirth: z
    .string({
      invalid_type_error: "Doğum yeri normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  dateOfBirth: z
    .string({
      invalid_type_error: "Doğum günü normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  profilePhoto: z
    .string({
      invalid_type_error: "Profil Fotoğrafı normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  linkedInLink: z
    .string({
      invalid_type_error: "LinkedIn normal metin olmalıdır.",
    })
    .trim()
    .optional(),
  websiteLink: z
    .string({
      invalid_type_error: "Website normal metin olmalıdır.",
    })
    .trim()
    .optional(),
})
