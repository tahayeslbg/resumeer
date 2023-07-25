import React from "react"

const AccountSkeleton = () => {
  const array = Array.from({ length: 3 }, (_, i) => i + 1)
  return (
    <div className="space-y-16 w-full">
      {array.map((i) => (
        <div key={i} className="flex flex-col space-y-3">
          <span className=" w-full max-w-[200px] rounded-full inline-block h-4 animate-pulse bg-border" />
          <div className="grid grid-cols-2 space-x-4 mb-5 sm:grid-cols-1 sm:space-y-3 sm:space-x-0">
            <div>
              <span className="block w-full max-w-[50px] rounded-full h-2 animate-pulse bg-border mb-1.5" />
              <span className="block w-full rounded h-10 animate-pulse bg-border " />
            </div>
            <div>
              <span className="block w-full max-w-[50px] rounded-full h-2 animate-pulse bg-border mb-1.5" />
              <span className="block w-full rounded h-10 animate-pulse bg-border " />
            </div>
          </div>
          <span className="block w-full max-w-[80px] rounded h-10 animate-pulse bg-border mb-1.5 self-end" />
        </div>
      ))}
    </div>
  )
}

export default AccountSkeleton
