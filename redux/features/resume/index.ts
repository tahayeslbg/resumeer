import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface PersonalInfoFieldPayload {
  field: keyof typeof initialState.personalInfo
  value: string
}

export interface SummaryInfoFieldPayload {
  field: keyof typeof initialState.summaryInfo
  value: string
}

export interface Education {
  school: string
  degree: string
  startDate: string
  endDate: string
  city: string
  description: string
}

export interface EducationInfo {
  title: string
  educations: Education[]
}

export interface SetEducationInfoFieldPayload {
  field: keyof EducationInfo | keyof Education
  value: string
  index?: number
}
export interface RemoveEducationPayload {
  index: number
}

export interface MoveEducationPayload {
  oldIndex: number
  newIndex: number
}

export interface Experience {
  title: string
  city: string
  description: string
  startDate: string
  endDate: string
  role: string
}

export interface ExperienceInfo {
  title: string
  experiences: Experience[]
}

export interface SetExperienceInfoFieldPayload {
  field: keyof ExperienceInfo | keyof Experience
  value: string
  index?: number
}

export interface Skill {
  name: string
  rate: number
}

export interface SkillInfo {
  title: string
  skills: Skill[]
}

export interface SetSkillInfoFieldPayload {
  field: keyof SkillInfo | keyof Skill
  value: string | number
  index?: number
}

export interface Reference {
  emailAddress: string
  phoneNumber: string
  contactPerson: string
  companyName: string
}

export interface ReferenceInfo {
  title: string
  references: Reference[]
}

export interface SetReferenceInfoFieldPayload {
  field: keyof ReferenceInfo | keyof Reference
  value: string
  index?: number
}

export interface Info {
  title: string
  startDate: string
  endDate: string
  description: string
}

export interface CustomInfo {
  title: string
  infos: Info[]
}

export interface SetCustomInfoFieldPayload {
  field: keyof CustomInfo | keyof Info
  value: string
  index?: number
}

export interface Course {
  name: string
  organisation: string
  startDate: string
  endDate: string
}

export interface CourseInfo {
  title: string
  courses: Course[]
}

export interface SetCourseInfoFieldPayload {
  field: keyof CourseInfo | keyof Course
  value: string
  index?: number
}

export interface HobbyInfo {
  title: string
  description: string
}

export interface HobbyInfoFieldPayload {
  field: keyof HobbyInfo
  value: string
}

export interface Internship {
  title: string
  role: string
  startDate: string
  endDate: string
  city: string
  description: string
}

export interface InternshipInfo {
  title: string
  internships: Internship[]
}

export interface SetInternshipInfoFieldPayload {
  field: keyof InternshipInfo | keyof Internship
  value: string
  index?: number
}

export interface Language {
  name: string
  rate: number
}

export interface LanguageInfo {
  title: string
  languages: Language[]
}

export interface SetLanguageInfoFieldPayload {
  field: keyof LanguageInfo | keyof Language
  value: string | number
  index?: number
}

export const initialState = {
  templateId: "",
  templateName: "İsimsiz",
  currentStep: 1,
  personalInfo: {
    jobTitle: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    zipCode: "",
    nationality: "",
    drivingLicense: "",
    placeOfBirth: "",
    dateOfBirth: "",
    profilePhoto: "",
    linkedInLink: "",
    websiteLink: "",
  },
  summaryInfo: {
    title: "Professional Summary",
    description: "",
  },
  educationInfo: {
    title: "Educations",
    educations: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ],
  },
  experienceInfo: {
    title: "Experiences",
    experiences: [
      {
        title: "",
        city: "",
        description: "",
        startDate: "",
        endDate: "",
        role: "",
      },
    ],
  },
  skillInfo: {
    title: "Skills",
    skills: [{ name: "", rate: 3 }],
  },
  referenceInfo: {
    title: "References",
    references: [
      {
        emailAddress: "",
        phoneNumber: "",
        contactPerson: "",
        companyName: "",
      },
    ],
  },
  customInfo: null as CustomInfo | null,
  courseInfo: null as CourseInfo | null,
  hobbyInfo: null as HobbyInfo | null,
  internshipInfo: null as InternshipInfo | null,
  languageInfo: null as LanguageInfo | null,
}

// Fetch Data
export const fetchResume = createAsyncThunk(
  "resume/fetchResume",
  async ({ id, token }: { id: string; token: string | undefined }) => {
    const resumeRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/resumes/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    const resume = await resumeRes.json()
    return resume.data
  }
)

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    //Template Fields
    setTemplateId(state, action: PayloadAction<string>) {
      state.templateId = action.payload
    },
    setTemplateName(state, action: PayloadAction<string>) {
      state.templateName = action.payload
    },
    //Steps Fields
    setNextStep(state) {
      state.currentStep += 1
    },
    setPrevStep(state) {
      state.currentStep -= 1
    },
    //PersonalInfo Fields
    setPersonalInfoField(
      state,
      action: PayloadAction<PersonalInfoFieldPayload>
    ) {
      state.personalInfo[action.payload.field] = action.payload.value
    },
    //SummaryInfo Fields
    setSummaryInfoField(state, action: PayloadAction<SummaryInfoFieldPayload>) {
      state.summaryInfo[action.payload.field] = action.payload.value
    },
    //EducationInfo Fields
    setEducationInfoField(
      state,
      action: PayloadAction<SetEducationInfoFieldPayload>
    ) {
      if (action.payload.field === "title") {
        state.educationInfo.title = action.payload.value
      } else if (action.payload.index !== undefined) {
        state.educationInfo.educations[action.payload.index][
          action.payload.field as keyof Education
        ] = action.payload.value
      }
    },
    addEducation(state) {
      state.educationInfo.educations.push({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      })
    },
    removeEducation(state, action: PayloadAction<RemoveEducationPayload>) {
      state.educationInfo.educations.splice(action.payload.index, 1)
    },
    moveEducation(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const education = state.educationInfo.educations[oldIndex]
      state.educationInfo.educations.splice(oldIndex, 1)
      state.educationInfo.educations.splice(newIndex, 0, education)
    },
    //ExperienceInfo Fields
    setExperienceInfoField(
      state,
      action: PayloadAction<SetExperienceInfoFieldPayload>
    ) {
      if (
        action.payload.field === "title" &&
        action.payload.index === undefined
      ) {
        state.experienceInfo.title = action.payload.value
      } else if (action.payload.index !== undefined) {
        state.experienceInfo.experiences[action.payload.index][
          action.payload.field as keyof Experience
        ] = action.payload.value
      }
    },
    addExperience(state) {
      state.experienceInfo.experiences.push({
        title: "",
        city: "",
        description: "",
        startDate: "",
        endDate: "",
        role: "",
      })
    },
    removeExperience(state, action: PayloadAction<RemoveEducationPayload>) {
      state.experienceInfo.experiences.splice(action.payload.index, 1)
    },
    moveExperience(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const experience = state.experienceInfo.experiences[oldIndex]
      state.experienceInfo.experiences.splice(oldIndex, 1)
      state.experienceInfo.experiences.splice(newIndex, 0, experience)
    },
    //SkillInfo Fields
    setSkillInfoField(state, action: PayloadAction<SetSkillInfoFieldPayload>) {
      if (
        action.payload.field === "title" &&
        action.payload.index === undefined
      ) {
        state.skillInfo.title = action.payload.value as string
      } else if (action.payload.index !== undefined) {
        //@ts-ignore
        state.skillInfo.skills[action.payload.index][
          action.payload.field as keyof Skill
        ] = action.payload.value
      }
    },
    addSkill(state) {
      state.skillInfo.skills.push({ name: "", rate: 3 })
    },
    removeSkill(state, action: PayloadAction<RemoveEducationPayload>) {
      state.skillInfo.skills.splice(action.payload.index, 1)
    },
    moveSkill(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const skill = state.skillInfo.skills[oldIndex]
      state.skillInfo.skills.splice(oldIndex, 1)
      state.skillInfo.skills.splice(newIndex, 0, skill)
    },
    //ReferenceInfo Fields
    setReferenceInfoField(
      state,
      action: PayloadAction<SetReferenceInfoFieldPayload>
    ) {
      if (
        action.payload.field === "title" &&
        action.payload.index === undefined
      ) {
        state.referenceInfo.title = action.payload.value
      } else if (action.payload.index !== undefined) {
        state.referenceInfo.references[action.payload.index][
          action.payload.field as keyof Reference
        ] = action.payload.value
      }
    },
    addReference(state) {
      state.referenceInfo.references.push({
        emailAddress: "",
        phoneNumber: "",
        contactPerson: "",
        companyName: "",
      })
    },
    removeReference(state, action: PayloadAction<RemoveEducationPayload>) {
      state.referenceInfo.references.splice(action.payload.index, 1)
    },
    moveReference(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const reference = state.referenceInfo.references[oldIndex]
      state.referenceInfo.references.splice(oldIndex, 1)
      state.referenceInfo.references.splice(newIndex, 0, reference)
    },
    //CustomInfo Fields
    addCustomInfo(state) {
      if (state.customInfo === null) {
        state.customInfo = {
          title: "Custom Section",
          infos: [{ title: "", startDate: "", endDate: "", description: "" }],
        }
      }
    },
    resetCustomInfo(state) {
      state.customInfo = null
    },
    setCustomInfoField(
      state,
      action: PayloadAction<SetCustomInfoFieldPayload>
    ) {
      if (
        action.payload.field === "title" &&
        action.payload.index === undefined
      ) {
        state.customInfo!.title = action.payload.value
      } else if (action.payload.index !== undefined) {
        state.customInfo!.infos[action.payload.index][
          action.payload.field as keyof Info
        ] = action.payload.value
      }
    },
    addInfo(state) {
      state.customInfo!.infos.push({
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      })
    },
    removeInfo(state, action: PayloadAction<RemoveEducationPayload>) {
      state.customInfo!.infos.splice(action.payload.index, 1)
    },
    moveInfo(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const info = state.customInfo!.infos[oldIndex]
      state.customInfo!.infos.splice(oldIndex, 1)
      state.customInfo!.infos.splice(newIndex, 0, info)
    },
    //CourseInfo Fields
    addCourseInfo(state) {
      if (state.courseInfo === null) {
        state.courseInfo = {
          title: "Courses",
          courses: [{ name: "", organisation: "", startDate: "", endDate: "" }],
        }
      }
    },
    resetCourseInfo(state) {
      state.courseInfo = null
    },
    setCourseInfoField(
      state,
      action: PayloadAction<SetCourseInfoFieldPayload>
    ) {
      if (
        action.payload.field === "title" &&
        action.payload.index === undefined
      ) {
        state.courseInfo!.title = action.payload.value
      } else if (action.payload.index !== undefined) {
        state.courseInfo!.courses[action.payload.index][
          action.payload.field as keyof Course
        ] = action.payload.value
      }
    },
    addCourse(state) {
      state.courseInfo!.courses.push({
        name: "",
        organisation: "",
        startDate: "",
        endDate: "",
      })
    },
    removeCourse(state, action: PayloadAction<RemoveEducationPayload>) {
      state.courseInfo!.courses.splice(action.payload.index, 1)
    },
    moveCourse(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const course = state.courseInfo!.courses[oldIndex]
      state.courseInfo!.courses.splice(oldIndex, 1)
      state.courseInfo!.courses.splice(newIndex, 0, course)
    },
    //HobbyInfo Fields
    addHobbyInfo(state) {
      if (state.hobbyInfo === null) {
        state.hobbyInfo = {
          title: "Hobbies",
          description: "",
        }
      }
    },
    resetHobbyInfo(state) {
      state.hobbyInfo = null
    },
    setHobbyInfoField(state, action: PayloadAction<HobbyInfoFieldPayload>) {
      state.hobbyInfo![action.payload.field] = action.payload.value
    },
    //InternshipInfo Fields
    addInternshipInfo(state) {
      if (state.internshipInfo === null) {
        state.internshipInfo = {
          title: "Internships",
          internships: [
            {
              title: "",
              role: "",
              startDate: "",
              endDate: "",
              city: "",
              description: "",
            },
          ],
        }
      }
    },
    resetInternshipInfo(state) {
      state.internshipInfo = null
    },
    setInternshipInfoField(
      state,
      action: PayloadAction<SetInternshipInfoFieldPayload>
    ) {
      if (
        action.payload.field === "title" &&
        action.payload.index === undefined
      ) {
        state.internshipInfo!.title = action.payload.value
      } else if (action.payload.index !== undefined) {
        state.internshipInfo!.internships[action.payload.index][
          action.payload.field as keyof Internship
        ] = action.payload.value
      }
    },
    addInternship(state) {
      state.internshipInfo!.internships.push({
        title: "",
        role: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      })
    },
    removeInternship(state, action: PayloadAction<RemoveEducationPayload>) {
      state.internshipInfo!.internships.splice(action.payload.index, 1)
    },
    moveInternship(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const internship = state.internshipInfo!.internships[oldIndex]
      state.internshipInfo!.internships.splice(oldIndex, 1)
      state.internshipInfo!.internships.splice(newIndex, 0, internship)
    },
    //LanguageInfo Fields
    addLanguageInfo(state) {
      if (state.languageInfo === null) {
        state.languageInfo = {
          title: "Languages",
          languages: [
            {
              name: "",
              rate: 3,
            },
          ],
        }
      }
    },
    resetLanguageInfo(state) {
      state.languageInfo = null
    },
    setLanguageInfoField(
      state,
      action: PayloadAction<SetLanguageInfoFieldPayload>
    ) {
      if (
        action.payload.field === "title" &&
        action.payload.index === undefined
      ) {
        state.languageInfo!.title = action.payload.value as string
      } else if (action.payload.index !== undefined) {
        //@ts-ignore
        state.languageInfo!.languages[action.payload.index][
          action.payload.field as keyof Skill
        ] = action.payload.value
      }
    },
    addLanguage(state) {
      state.languageInfo!.languages.push({ name: "", rate: 3 })
    },
    removeLanguage(state, action: PayloadAction<RemoveEducationPayload>) {
      state.languageInfo!.languages.splice(action.payload.index, 1)
    },
    moveLanguage(state, action: PayloadAction<MoveEducationPayload>) {
      const { oldIndex, newIndex } = action.payload
      const language = state.languageInfo!.languages[oldIndex]
      state.languageInfo!.languages.splice(oldIndex, 1)
      state.languageInfo!.languages.splice(newIndex, 0, language)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchResume.fulfilled, (state, action) => {
      state.personalInfo = action.payload.personalInfo
      state.summaryInfo = action.payload.summaryInfo
      state.educationInfo = action.payload.educationInfo
      state.experienceInfo = action.payload.experienceInfo
      state.skillInfo = action.payload.skillInfo
      state.referenceInfo = action.payload.referenceInfo
      state.customInfo = action.payload.customInfo
      state.courseInfo = action.payload.courseInfo
      state.hobbyInfo = action.payload.hobbyInfo
      state.internshipInfo = action.payload.internshipInfo
      state.languageInfo = action.payload.languageInfo
      state.templateId = action.payload.templateId
    })
  },
})

export const {
  setPersonalInfoField,
  setSummaryInfoField,
  setEducationInfoField,
  addEducation,
  removeEducation,
  moveEducation,
  setExperienceInfoField,
  addExperience,
  removeExperience,
  moveExperience,
  setSkillInfoField,
  addSkill,
  removeSkill,
  moveSkill,
  setReferenceInfoField,
  addReference,
  removeReference,
  moveReference,
  addCustomInfo,
  resetCustomInfo,
  setCustomInfoField,
  addInfo,
  removeInfo,
  moveInfo,
  addCourseInfo,
  resetCourseInfo,
  setCourseInfoField,
  addCourse,
  removeCourse,
  moveCourse,
  addHobbyInfo,
  resetHobbyInfo,
  setHobbyInfoField,
  addInternshipInfo,
  resetInternshipInfo,
  setInternshipInfoField,
  addInternship,
  removeInternship,
  moveInternship,
  addLanguageInfo,
  resetLanguageInfo,
  setLanguageInfoField,
  addLanguage,
  removeLanguage,
  moveLanguage,
  setTemplateId,
  setTemplateName,
  setNextStep,
  setPrevStep,
} = resumeSlice.actions

export default resumeSlice.reducer
