import React, { FC } from "react"

interface DisplayDateProps {
  createdAt: string
  updatedAt: string
}

const DisplayDate: FC<DisplayDateProps> = ({ createdAt, updatedAt }) => {
  const displayDate =
    createdAt === updatedAt
      ? new Date(createdAt).toLocaleDateString()
      : new Date(updatedAt).toLocaleDateString()
  return (
    <span className="text-sm text-slate-500 dark:text-slate-400">
      {displayDate}
    </span>
  )
}

export default DisplayDate
