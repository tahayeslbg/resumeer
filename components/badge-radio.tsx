"use client"

import React, { ChangeEvent } from "react"

import { Badge } from "./ui/badge"

type BadgeRadioProps = {
  options: string[]
  value: string
  onChange: (value: string) => void
}

const BadgeRadio: React.FC<BadgeRadioProps> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <>
      {options.map((option) => (
        <label key={option} className="relative cursor-pointer">
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={handleChange}
            className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
          />
          <Badge
            variant="secondary"
            className={`cursor-pointer ${
              value === option ? "bg-slate-300 dark:bg-slate-800" : ""
            }`}
          >
            {" "}
            {option}{" "}
          </Badge>
        </label>
      ))}
    </>
  )
}

export default BadgeRadio
