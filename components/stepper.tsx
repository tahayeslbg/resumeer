import React, { FC } from "react"

import { Icons } from "./icons"

interface StepperProps {
  steps: string[]
  currentStep: number
}

const Stepper: FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <>
      <div className="flex space-x-3 sm:hidden items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center">
              <div
                className={`w-7 h-7 rounded-full flex justify-center items-center  mr-2 text-sm ${
                  index >= currentStep
                    ? "bg-transparent border border-slate-300 dark:border-slate-600 text-slate-300 dark:text-slate-600"
                    : "bg-primary text-slate-300 dark:text-slate-900"
                }`}
              >
                {index + 1 < currentStep ? (
                  <Icons.check
                    width={16}
                    height={16}
                    className="stroke-slate-100 dark:stroke-slate-900"
                  />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`text-sm ${
                  index >= currentStep
                    ? "text-slate-300 dark:text-slate-600"
                    : "text-primary"
                }`}
              >
                {step}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <span className="border-r border-border h-5 mx-2" />
            )}
          </div>
        ))}
      </div>
      <div className="hidden sm:block sticky top-0 left-0  w-full h-1.5 bg-secondary rounded-full">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>
    </>
  )
}

export default Stepper
