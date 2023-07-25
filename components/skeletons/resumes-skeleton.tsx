import React from "react"

const ResumesSkeleton = () => {
  const array = Array.from({ length: 4 }, (_, i) => i + 1)
  return (
    <div className="container flex justify-center">
      <div className="w-full max-w-7xl my-10 mx-auto">
        <div className="flex justify-between items-center pb-4 border-b border-border">
          <div className="w-24 h-4 rounded-full animate-pulse bg-border" />
          <div className="w-32 h-10 rounded-sm animate-pulse bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10 sm:grid-cols-1">
          {array.map((i) => (
            <div key={i} className="flex items-start space-x-5">
              <span className="w-full h-80 animate-pulse bg-border rounded-md" />
              <div className="flex-shrink-0">
                <div className="w-32 h-4 rounded-full animate-pulse bg-border mb-4" />
                <div className="w-24 h-2 rounded-full animate-pulse bg-border mb-8" />
                <div className="space-y-4 ">
                  <div className="w-12 h-2 rounded-full animate-pulse bg-border " />
                  <div className="w-12 h-2 rounded-full animate-pulse bg-border " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResumesSkeleton
