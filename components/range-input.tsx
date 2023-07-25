import { ChangeEvent, FC, useState } from "react"

interface RangeInputProps {
  min: number
  max: number
  step: number
  value: number
  labels?: string[]
  onChange: (value: number) => void
}

const RangeInput: FC<RangeInputProps> = ({
  min,
  max,
  step,
  value,
  labels,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setInternalValue(newValue)
    onChange(newValue)
  }

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-2 rounded-full bg-F1F5F9"
        style={{
          background: `linear-gradient(to right, #0F172A 0%, #0F172A ${
            ((internalValue - min) / (max - min)) * 100
          }%, #F1F5F9 ${
            ((internalValue - min) / (max - min)) * 100
          }%, #F1F5F9 100%)`,
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={internalValue}
        onChange={handleChange}
        className="range-input appearance-none w-full h-2 rounded-full outline-none bg-transparent absolute top-0 left-0"
      />
      {labels ? (
        <div
          className="absolute top-[-2.5rem]  py-1 px-2 text-xs font-medium text-slate-400 dark:text-slate-500 bg-background shadow-[0px_0px_4px_0px_rgba(0,0,0,0.10)] text-center"
          style={{
            left: `calc(${
              ((internalValue - min) / (max - min)) * 100
            }% - 2rem)`,
          }}
        >
          {labels[internalValue]}
        </div>
      ) : null}
    </div>
  )
}

export default RangeInput
