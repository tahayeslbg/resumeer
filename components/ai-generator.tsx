"use client"

import { FC, useState, useTransition } from "react"
import { usePathname } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { generateDescriptionAction } from "@/app/actions"

import BadgeRadio from "./badge-radio"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"
import { decreaseAICredit } from "@/redux/features/user"

interface AIGeneratorProps {
  content: string
  generatedContent: (value: string) => void
}

const AIGenerator: FC<AIGeneratorProps> = ({ content, generatedContent }) => {
  const [promptSubject, setPromptSubject] = useState("")

  const dispatch = useAppDispatch()
  const pathname = usePathname()
  
  const resumeId = pathname.split("/")[4]
  const strippedContent = content.replace(/<[^>]+>/g, "")

  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const generateDescription = async () => {
    startTransition(async () => {
      const generateDescription = await generateDescriptionAction(
        {
          prompt: strippedContent,
          format: promptSubject,
        },
        resumeId
      )
      if (!generateDescription.success) {
        toast({
          description: generateDescription.errorMessage,
          variant: "destructive",
        })
      } else {
        dispatch(decreaseAICredit())
        generatedContent(generateDescription.data)

      }
    })
  }

  const options = [
    "Resmi",
    "Yaratıcı",
    "Kişisel",
    "Akademik",
    "Minimal",
    "Hikaye",
  ]

  const me = useAppSelector((state: RootState) => state.user)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute bottom-3 right-5">
        <Icons.magic width={20} height={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        <div className="pt-3 pb-2 px-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-primary">
              {" "}
              AI Asistanı{" "}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {me.aiCredit} kredi kaldı
            </span>
          </div>
          <DropdownMenuSeparator />
          <p className="text-xs text-slate-400 dark:text-slate-500 my-2">
            NOT: Yapay zeka, editöre girdiğiniz yazıyla ilgili geri dönüş
            sağlayacaktır.
          </p>
          <h5 className="text-sm font-semibold text-primary mb-2">
            Format Seç
          </h5>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <BadgeRadio
              options={options}
              value={promptSubject}
              onChange={setPromptSubject}
            />
          </div>
          <Button
            size="sm"
            className="w-full"
            onClick={generateDescription}
            disabled={me.aiCredit < 1}
          >
            {isPending ? (
              <Icons.loader
                width={16}
                height={16}
                className="animate-spin mr-2"
              />
            ) : null}
            Oluştur
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AIGenerator
