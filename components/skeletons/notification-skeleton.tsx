import React from "react"

const NotificationSkeleton = () => {
  return (
    <div className="space-y-16 w-full">
      <div className="flex flex-col space-y-3">
        <span className=" w-full max-w-[200px] rounded-full inline-block h-4 animate-pulse bg-border" />
        <div className="w-full h-20 rounded h-20 animate-pulse bg-border " />
        <span className="block w-full max-w-[80px] rounded h-10 animate-pulse bg-border self-end" />
      </div>
    </div>
  )
}

export default NotificationSkeleton
