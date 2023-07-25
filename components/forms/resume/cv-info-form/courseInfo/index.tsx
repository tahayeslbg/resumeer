import { useState } from "react"
import {
    Course,
  CourseInfo,
  addCourse,
  moveCourse,
  removeCourse,
  resetCourseInfo,
  setCourseInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import CourseInfoField from "./course-info-field"
import { Label } from "@/components/ui/label"

const CourseInfoForm = () => {
  const [isOpen, setIsOpen] = useState([])
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const [isEditedTitle, setIsEditedTitle] = useState(false)

  const dispatch = useAppDispatch()
  const courseInfo = useAppSelector(
    (state: RootState) => state.resume.courseInfo
  )

  const handleCourseInfoChange =
    (field: keyof Course | keyof CourseInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setCourseInfoField({
          index,
          field,
          value,
        })
      )
    }
  const handleAddCourse = () => {
    dispatch(addCourse())
  }

  const handleRemoveCourse = (index: number) => {
    dispatch(removeCourse({ index }))
  }

  const handleMove = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    dispatch(moveCourse({ oldIndex: index, newIndex }));
  };

  return (
    <div className="border border-border rounded-lg">
      <div
        className="flex justify-between p-5 cursor-pointer space-x-5"
        onClick={() => setIsOpenInfo((prev) => !prev)}
      >
        {isEditedTitle ? (
          <div className="flex flex-col space-y-3">
            <Input
              value={courseInfo!.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(event) => {
                handleCourseInfoChange("title", undefined)(event.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                }
              }}
              onBlur={() => {
                if (courseInfo!.title !== "") {
                  setIsEditedTitle(false)
                }
              }}
            />
            <span className="text-sm text-red-500">
              {courseInfo!.title === "" && "Bu alan boş bırakılamaz."}
            </span>
          </div>
        ) : (
          <div className="text-base font-medium flex items-center">
            <Icons.award className="mr-3" />
            <span>{courseInfo!.title}</span>
          </div>
        )}
        <div className="flex space-x-4">
          <Icons.edit
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              if (courseInfo!.title !== "") {
                setIsEditedTitle((prev) => !prev)
              }
            }}
          />
          <Icons.trash
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              dispatch(resetCourseInfo())
            }}
          />
          <Icons.chevronDown width={20} height={20} />
        </div>
      </div>
      {isOpenInfo ? (
        <div className="pb-5 px-5 space-y-5">
          {courseInfo!.courses.map((field: any, index: number) => (
            <div
              key={index}
              className="border rounded-md border-border transition-transform animate-in duration-150"
            >
              <div
                className={`flex justify-between p-5 items-center cursor-pointer`}
                onClick={() =>
                  setIsOpen((prevIsOpen) => {
                    const newIsOpen: any = [...prevIsOpen]
                    newIsOpen[index] = !newIsOpen[index]
                    return newIsOpen
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col space-y-3">
                    <button
                      type="button"
                      onClick={(e: any) => {
                        e.stopPropagation()
                        handleMove(index, "up")
                      }}
                      disabled={index === 0}
                      className="py-0 px-0 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Icons.arrowUp width={14} height={14} />
                    </button>
                    <button
                      type="button"
                      onClick={(e: any) => {
                        e.stopPropagation()
                        handleMove(index, "down")
                      }}
                      disabled={index === courseInfo!.courses.length - 1}
                      className="py-0 px-0 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Icons.arrowDown width={14} height={14} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium">
                      {courseInfo!.courses[index].name
                        ? courseInfo!.courses[index].name
                        : "(Belirtilmedi)"}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                    {courseInfo!.courses[index].startDate
                        ? courseInfo!.courses[index].startDate
                        : "(Belirtilmedi)"}{" "}
                      -{" "}
                      {courseInfo!.courses[index].endDate
                        ? courseInfo!.courses[index].endDate
                        : "(Belirtilmedi)"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center ">
                  <Button
                    size="sm"
                    type="button"
                    variant="link"
                    onClick={() => handleRemoveCourse(index)}
                    disabled={courseInfo!.courses.length <= 1}
                  >
                    <Icons.trash width={16} height={16} />
                  </Button>

                  <Icons.chevronDown width={16} height={16} />
                </div>
              </div>

              {isOpen[index] ? (
                <div className="px-5 pb-5 space-y-5">
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <CourseInfoField index={index} label="Kurs Adı" name="name" />
                   <div>
                      <Label>Başlangıç & Bitiş Tarihi</Label>
                      <div className="grid grid-cols-2 gap-x-5">
                        <CourseInfoField type="date" index={index} name="startDate" />
                        <CourseInfoField type="date" index={index} name="endDate" />
                      </div>
                    </div> 
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <CourseInfoField index={index} label="Organizasyon" name="organisation" />
                    <div />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        <Button
            type="button"
            variant="link"
            onClick={handleAddCourse}
            disabled={courseInfo!.courses.length === 4}
            className="p-0 flex items-center text-sm hover:no-underline"
        >
            <span className="p-1 bg-slate-100 dark:bg-slate-800 rounded-full mr-2">
            <Icons.plus width={16} height={16} />
            </span>
            Kurs Ekle
        </Button>
        </div>
      ) : null}
       
    </div>
  )
}

export default CourseInfoForm
