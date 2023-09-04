"use client"

import React, { FC } from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share"

import { convertTurkishToEnglish } from "@/lib/utils"

import { Icons } from "../icons"

interface SocialShareButtonsProps {
  shareUrl: string
  shareTitle?: string
  hashtags?: string
}

const SocialShareButtons: FC<SocialShareButtonsProps> = ({
  shareUrl,
  shareTitle,
  hashtags,
}) => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : ""

  const rawHashtagsArr: string[] | undefined = hashtags?.split(", ")
  const processedHashtagsArr: string[] | undefined = rawHashtagsArr?.map(
    (hashtag) => convertTurkishToEnglish(hashtag.replace(/\s/g, ""))
  )

  return (
    <div className="flex items-center space-x-5">
      <span className="text-sm font-medium text-primary">Paylaş:</span>
      <div className="flex items-center space-x-5">
        <FacebookShareButton
          url={`${origin}/blog/${shareUrl}`}
          quote={shareTitle}
          hashtag={`${
            processedHashtagsArr ? "#" + processedHashtagsArr[0] : ""
          }`}
        >
          <div className="bg-primary rounded-full p-1 ">
            <Icons.facebook width={16} height={16} />
          </div>
        </FacebookShareButton>
        <TwitterShareButton
          url={`${origin}/blog/${shareUrl}`}
          title={shareTitle}
          hashtags={processedHashtagsArr}
        >
          <div className="bg-primary rounded-full p-1">
            <Icons.twitter width={16} height={16} className="ml-[1px]" />
          </div>
        </TwitterShareButton>
        <TelegramShareButton
          url={`${origin}/blog/${shareUrl}`}
          title={shareTitle}
        >
          <div className="bg-primary rounded-full p-1">
            <Icons.telegram width={16} height={16} className="-ml-[1px]" />
          </div>
        </TelegramShareButton>
        <WhatsappShareButton
          url={`${origin}/blog/${shareUrl}`}
          title={shareTitle}
        >
          <div className="bg-primary rounded-full p-1">
            <Icons.whatsapp width={16} height={16} className="ml-[1px]" />
          </div>
        </WhatsappShareButton>
        <LinkedinShareButton
          url={`${origin}/blog/${shareUrl}`}
          title={shareTitle}
        >
          <div className="bg-primary rounded-full p-1">
            <Icons.linkedin width={16} height={16} />
          </div>
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default SocialShareButtons
