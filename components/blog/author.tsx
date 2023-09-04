"use client"

import React, { FC } from "react"

import CMSImage from "./cms-image"

interface AuthorProps {
  authorImageWidth: number
  authorImageHeight: number
  authorImageSrc: string
  authorImageAlt: string
  authorFullName?: string
}

const Author: FC<AuthorProps> = ({
  authorImageSrc,
  authorImageAlt,
  authorFullName,
  authorImageWidth,
  authorImageHeight,
}) => {

  
  return (
    <div className="flex items-center space-x-3">
      <CMSImage
        width={authorImageWidth}
        height={authorImageHeight}
        src={authorImageSrc}
        alt={authorImageAlt}
        className="rounded-full object-cover"
      />
      {authorFullName ? (
        <span className="text-sm text-primary"> {authorFullName} </span>
      ) : null}
    </div>
  )
}

export default Author
