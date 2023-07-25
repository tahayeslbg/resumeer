"use client"

import React from "react"
import { useAppSelector } from "@/redux/hooks"

const BasicTemplate = () => {
  const personalInfo = useAppSelector((resume) => resume.resume.personalInfo)
  const summaryInfo = useAppSelector((resume) => resume.resume.summaryInfo)
  const educationInfo = useAppSelector((resume) => resume.resume.educationInfo)
  const experienceInfo = useAppSelector((resume) => resume.resume.experienceInfo)
  const skillInfo = useAppSelector((resume) => resume.resume.skillInfo)
  const referenceInfo = useAppSelector((resume) => resume.resume.referenceInfo)
  const customInfo = useAppSelector((resume) => resume.resume.customInfo)
  const hobbyInfo = useAppSelector((resume) => resume.resume.hobbyInfo)
  const courseInfo = useAppSelector((resume) => resume.resume.courseInfo)
  const internshipInfo = useAppSelector((resume) => resume.resume.internshipInfo)
  const languageInfo = useAppSelector((resume) => resume.resume.languageInfo)

  const isDetail =
    personalInfo.address ||
    personalInfo.city ||
    personalInfo.zipCode ||
    personalInfo.country ||
    personalInfo.emailAddress ||
    personalInfo.phoneNumber ||
    personalInfo.nationality ||
    personalInfo.placeOfBirth ||
    personalInfo.dateOfBirth ||
    personalInfo.drivingLicense

  const isLinks = personalInfo.linkedInLink || personalInfo.websiteLink

  return (
    <div className="text-[16px] xl:text-[13.76px] lg:text-[11.83px] bg-white text-slate-900 shadow-xl xl:shadow-lg lg:shadow-md md:shadow sm:shadow-sm shadow-primary.60 md:text-[10.17px] sm:text-[8.74px]">
      <div className=" w-[37.1875em] h-[52.625em]  break-words overflow-auto">
        <div id="basic_template" className="flex min-h-full  p-[2.5em]">
          <div className="min-h-full border-r border-slate-300 pr-[1.25em] w-1/3  space-y-[0.75em] ">
            {personalInfo.profilePhoto ? (
              <div className="w-[4.75em] h-[4.75em] rounded-full bg-slate-900"></div>
            ) : null}
            {personalInfo.firstName || personalInfo.lastName ? (
              <p className="font-bold uppercase text-[1.125em] ">
                {personalInfo.firstName + " " + personalInfo.lastName}
              </p>
            ) : null}
            {personalInfo.jobTitle ? (
              <p className="text-primary.70 text-[0.875em]">
                {personalInfo.jobTitle}
              </p>
            ) : null}
            {isDetail ? (
              <div>
                <p className="underline font-semibold text-[0.875em]">
                  Details
                </p>
                <div className="mt-[0.5em]">
                  {personalInfo.address ||
                  personalInfo.city ||
                  personalInfo.zipCode ||
                  personalInfo.country ? (
                    <p className="text-[0.625em] mb-[0.25em]">
                      <b>Address: </b>{" "}
                      {personalInfo.address +
                        " " +
                        personalInfo.city +
                        " " +
                        personalInfo.zipCode +
                        " " +
                        personalInfo.country}
                    </p>
                  ) : null}
                  {personalInfo.phoneNumber ? (
                    <p className="text-[0.625em] mb-[0.25em]">
                      <b>Phone:</b> {personalInfo.phoneNumber}
                    </p>
                  ) : null}
                  {personalInfo.emailAddress ? (
                    <p className="text-[0.625em] mb-[0.25em]">
                      <b>Email:</b> {personalInfo.emailAddress}
                    </p>
                  ) : null}
                  {personalInfo.nationality ? (
                    <p className="text-[0.625em] mb-[0.25em]">
                      <b>Nationality:</b> {personalInfo.nationality}
                    </p>
                  ) : null}
                  {personalInfo.placeOfBirth ? (
                    <p className="text-[0.625em] mb-[0.25em]">
                      <b>Place Of Birth:</b> {personalInfo.placeOfBirth}
                    </p>
                  ) : null}
                  {personalInfo.dateOfBirth ? (
                    <p className="text-[0.625em] mb-[0.25em]">
                      <b>Date Of Birth:</b> {personalInfo.dateOfBirth}
                    </p>
                  ) : null}
                  {personalInfo.drivingLicense ? (
                    <p className="text-[0.625em] mb-[0.25em]">
                      <b>Driving License:</b> {personalInfo.drivingLicense}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : null}

            {isLinks ? (
              <div>
                <p className=" underline font-semibold text-[0.875em] mb-[0.5em]">
                  Links
                </p>

                {personalInfo.linkedInLink ? (
                  <p className="text-[0.625em] mb-[0.25em]">
                    <b>Linkedin:</b> {personalInfo.linkedInLink}
                  </p>
                ) : null}
                {personalInfo.websiteLink ? (
                  <p className="text-[0.625em] mb-[0.25em]">
                    <b>Website:</b> {personalInfo.websiteLink}
                  </p>
                ) : null}
              </div>
            ) : null}
            {skillInfo.title ? (
              <div>
                <p className=" underline font-semibold text-[0.875em] mb-[0.5em]">
                  {skillInfo.title}
                </p>

                {skillInfo.skills.map((skill, i) => (
                  <div key={i} className="mb-[0.5em]">
                    <p className="text-[0.625em]">{skill.name} </p>
                    <div className="relative h-[0.25em]  mt-[0.5em]">
                      <div
                        className={`absolute top-0 left-0 h-full z-10 bg-slate-400 ${
                          skill.rate === 0
                            ? "w-0"
                            : skill.rate === 1
                            ? "w-1/4"
                            : skill.rate === 2
                            ? "w-1/2"
                            : skill.rate === 3
                            ? "w-3/4"
                            : "w-full"
                        }`}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black " />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            {languageInfo?.title ? (
              <div>
                <p className=" underline font-semibold text-[0.875em]">
                  {languageInfo?.title}
                </p>
                {languageInfo?.languages?.map((language, i) => (
                  <div key={i} className="mt-[0.5em]">
                    <div className="mb-[0.5em]">
                      <p className="text-[0.625em]">{language.name} </p>
                      <div className="relative h-[0.25em] mt-[0.5em]">
                        <div
                          className={`absolute top-0 left-0 h-full z-10 bg-slate-400 ${
                            language.rate === 0
                              ? "w-0"
                              : language.rate === 1
                              ? "w-1/4"
                              : language.rate === 2
                              ? "w-1/2"
                              : language.rate === 3
                              ? "w-3/4"
                              : "w-full"
                          }`}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black " />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            {hobbyInfo?.title ? (
              <div>
                <p className=" underline font-semibold text-[0.875em] mb-[0.5em]">
                  {hobbyInfo?.title}
                </p>
                <div
                  className="text-[0.625em]"
                  dangerouslySetInnerHTML={{ __html: hobbyInfo?.description }}
                />
              </div>
            ) : null}
          </div>
          <div className="h-full w-2/3 pl-[1.25em] space-y-[1em]">
            {summaryInfo.title ? (
              <div className="space-y-[0.5em]">
                <p className=" underline font-semibold text-[0.875em]">
                  {summaryInfo.title}
                </p>
                <div
                  className="text-[0.625em]"
                  dangerouslySetInnerHTML={{ __html: summaryInfo.description }}
                />
              </div>
            ) : null}
            {experienceInfo.title ? (
              <div className="space-y-[0.5em]">
                <p className=" underline font-semibold text-[0.875em]">
                  {experienceInfo.title}
                </p>
                {experienceInfo.experiences.map((experience, i) => (
                  <div key={i} className="space-y-[0.25em]">
                    <p className="text-[0.625em] font-semibold">
                      {experience.role} {experience.title && "|"}{" "}
                      {experience.title} {experience.city && ","}{" "}
                      {experience.city}
                    </p>
                    <p className="text-[0.5625em]">
                      {experience.startDate} {experience.endDate && "-"}{" "}
                      {experience.endDate}
                    </p>
                    <div
                      className="text-[0.625em]"
                      dangerouslySetInnerHTML={{
                        __html: experience.description,
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : null}
            {educationInfo.title ? (
              <div className="space-y-[0.5em]">
                <p className=" underline font-semibold text-[0.875em]">
                  {educationInfo.title}
                </p>
                {educationInfo.educations.map((education, i) => (
                  <div key={i} className="space-y-[0.25em]">
                    <p className="text-[0.625em] font-semibold">
                      {education.degree} {education.school && "|"}{" "}
                      {education.school} {education.city && ","}{" "}
                      {education.city}
                    </p>
                    <p className="text-[0.5625em]">
                      {education.startDate} {education.endDate && "-"}{" "}
                      {education.endDate}
                    </p>
                    <div
                      className="text-[0.625em]"
                      dangerouslySetInnerHTML={{
                        __html: education.description,
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : null}
            {referenceInfo.title ? (
              <div className="space-y-[0.5em]">
                <p className="underline font-semibold text-[0.875em]">
                  {referenceInfo.title}
                </p>
                {referenceInfo.references.map((reference, i) => (
                  <div key={i} className="grid grid-cols-2">
                    <div className="space-y-[0.25em]">
                      <p className="text-[0.625em]">
                        {" "}
                        {reference.contactPerson}{" "}
                      </p>
                      <p className="text-[0.625em]">
                        {" "}
                        {reference.emailAddress}{" "}
                      </p>
                      <p className="text-[0.625em]">{reference.phoneNumber} </p>
                      <p className="text-[0.625em] font-semibold">
                        {" "}
                        {reference.companyName}{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            {customInfo?.title ? (
              <div className="space-y-[0.5em]">
                <p className="underline font-semibold text-[0.875em]">
                  {customInfo?.title}
                </p>
                {customInfo?.infos?.map((info, i) => (
                  <div key={i} className="space-y-[0.25em]">
                    <p className=" text-[0.625em] font-semibold">
                      {info.title}{" "}
                    </p>
                    <p className=" text-[0.5625em]">
                      {info.startDate} {info.endDate && "-"} {info.endDate}{" "}
                    </p>
                    <div
                      className=" text-[0.625em]"
                      dangerouslySetInnerHTML={{ __html: info.description }}
                    />
                  </div>
                ))}
              </div>
            ) : null}
            {courseInfo?.title ? (
              <div className="space-y-[0.5em]">
                <p className="underline font-semibold text-[0.875em]">
                  {courseInfo!.title}
                </p>
                {courseInfo?.courses?.map((course, i) => (
                  <div key={i} className="space-y-[0.25em]">
                    <p className=" text-[0.625em] font-semibold">
                      {course.name} {course.organisation && "|"}{" "}
                      {course.organisation}
                    </p>
                    <p className=" text-[0.5625em]">
                      {course.startDate} {course.endDate && "-"}{" "}
                      {course.endDate}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
            {internshipInfo?.title ? (
              <div className="space-y-[0.5em]">
                <p className="underline font-semibold text-[0.875em]">
                  {internshipInfo?.title}
                </p>
                {internshipInfo?.internships?.map((internship, i) => (
                  <div key={i} className="space-y-[0.25em]">
                    <p className=" text-[0.625em] font-semibold">
                      {internship.role} {internship.title && "|"}{" "}
                      {internship.title}
                      {internship.city && ","} {internship.city}
                    </p>
                    <p className=" text-[0.5625em]">
                      {internship.startDate} {internship.endDate && "-"}{" "}
                      {internship.endDate}
                    </p>
                    <div
                      className=" text-[0.625em]"
                      dangerouslySetInnerHTML={{
                        __html: internship.description,
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicTemplate
