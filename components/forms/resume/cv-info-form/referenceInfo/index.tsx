import { useState } from "react"
import {
  Reference,
  ReferenceInfo,
  addReference,
  moveReference,
  removeReference,
  setReferenceInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import ReferenceInfoField from "./reference-info-field"

const ReferenceInfoForm = () => {
  const [isOpen, setIsOpen] = useState([])
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const [isEditedTitle, setIsEditedTitle] = useState(false)

  const dispatch = useAppDispatch()
  const referenceInfo = useAppSelector(
    (state: RootState) => state.resume.referenceInfo
  )

  const handleReferenceInfoChange =
    (field: keyof Reference | keyof ReferenceInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setReferenceInfoField({
          index,
          field,
          value,
        })
      )
    }
  const handleAddReference = () => {
    dispatch(addReference())
  }

  const handleRemoveReference = (index: number) => {
    dispatch(removeReference({ index }))
  }

  const handleMove = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    dispatch(moveReference({ oldIndex: index, newIndex }));
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
              value={referenceInfo.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(event) => {
                handleReferenceInfoChange("title", undefined)(event.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                }
              }}
              onBlur={() => {
                if (referenceInfo.title !== "") {
                  setIsEditedTitle(false)
                }
              }}
            />
            <span className="text-sm text-red-500">
              {referenceInfo.title === "" && "Bu alan boş bırakılamaz."}
            </span>
          </div>
        ) : (
          <div className="text-base font-medium flex items-center">
            <Icons.users className="mr-3" />
            <span>{referenceInfo.title}</span>
          </div>
        )}
        <div className="flex space-x-4">
          <Icons.edit
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              if (referenceInfo.title !== "") {
                setIsEditedTitle((prev) => !prev)
              }
            }}
          />
          <Icons.chevronDown width={20} height={20} />
        </div>
      </div>
      {isOpenInfo ? (
        <div className="pb-5 px-5 space-y-5">
          {referenceInfo.references.map((field: any, index: number) => (
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
                      disabled={index === referenceInfo.references.length - 1}
                      className="py-0 px-0 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Icons.arrowDown width={14} height={14} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium">
                      {referenceInfo.references[index].companyName
                        ? referenceInfo.references[index].companyName
                        : "(Belirtilmedi)"}
                    </span>
                    
                  </div>
                </div>
                <div className="flex items-center ">
                  <Button
                    size="sm"
                    type="button"
                    variant="link"
                    onClick={() => handleRemoveReference(index)}
                    disabled={referenceInfo.references.length <= 1}
                  >
                    <Icons.trash width={16} height={16} />
                  </Button>

                  <Icons.chevronDown width={16} height={16} />
                </div>
              </div>

              {isOpen[index] ? (
                <div className="px-5 pb-5 space-y-5">
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <ReferenceInfoField index={index} label="Şirket İsmi" name="companyName" />
                    <ReferenceInfoField index={index} label="İlgili Kişi" name="contactPerson" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <ReferenceInfoField index={index} label="E-Posta" name="emailAddress" />
                    <ReferenceInfoField index={index} label="Telefon Numarası" name="phoneNumber" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        <Button
            type="button"
            variant="link"
            onClick={handleAddReference}
            disabled={referenceInfo.references.length === 4}
            className="p-0 flex items-center text-sm hover:no-underline"
        >
            <span className="p-1 bg-slate-100 dark:bg-slate-800 rounded-full mr-2">
            <Icons.plus width={16} height={16} />
            </span>
            Referans Ekle
        </Button>
        </div>
      ) : null}
       
    </div>
  )
}

export default ReferenceInfoForm
