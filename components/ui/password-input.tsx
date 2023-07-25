import React, { useState } from "react"

import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { InputProps } from "./input"

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const passwordVisibleType = visible ? "text" : "password"
    const visibleIcon = visible ? (
      <Icons.eye
        width={20}
        onClick={() => setVisible(!visible)}
        className={disabled ? "stroke-muted-foreground" : ""}
      />
    ) : (
      <Icons.eyeOff
        width={20}
        onClick={() => setVisible(!visible)}
        className={disabled ? "stroke-muted-foreground" : ""}
      />
    )
    return (
      <div className="relative w-full">
        <input
          type={passwordVisibleType}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:text-muted",
            className
          )}
          ref={ref}
          {...props}
        />
        <span className="absolute top-1/2 right-2 -translate-y-1/2 ">
          {visibleIcon}{" "}
        </span>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
