"use client"

import { FC, useTransition } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { deleteResumeAction } from "@/app/actions"

import { Icons } from "../icons"
import { useToast } from "../ui/use-toast"

interface DeleteResumeDialogProps {
  resumeId: string
}

const DeleteResumeDialog: FC<DeleteResumeDialogProps> = ({ resumeId }) => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const deleteResume = async () => {
    startTransition(async () => {
      const deleteResume = await deleteResumeAction(resumeId)
      if (!deleteResume.success) {
        toast({
          description: deleteResume.errorMessage,
          variant: "destructive",
        })
      } else {
        toast({
          description: deleteResume.message,
        })
      }
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="hover:no-underline px-0 text-red-500">
          <Icons.trash width={20} height={20} className="mr-2 stroke-red-500" />
          Sil
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Özgeçmişi Sil</DialogTitle>
          <DialogDescription>
            İsimsiz adlı özgeçmiş silinecek. Silmek için emin misiniz?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="button" variant="destructive" onClick={deleteResume}>
              {isPending ? (
                <Icons.loader
                  width={16}
                  height={16}
                  className="animate-spin mr-2"
                />
              ) : null}
              Sil
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteResumeDialog
