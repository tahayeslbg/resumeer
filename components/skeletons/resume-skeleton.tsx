import React from "react"
import { Icons } from "../icons"

const ResumeSkeleton = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-65px)]">
     <Icons.loader className="stroke-slate-500 dark:stroke-slate-400 animate-spin" />
    </div>
  )
}

export default ResumeSkeleton
