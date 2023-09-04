import { clsx, type ClassValue } from "clsx"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { twMerge } from "tailwind-merge"

import { ResumeTemplatesConfig } from "@/config/resumeTemplates"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function downloadCV(template: ResumeTemplatesConfig) {
  if (template) {
    const capture = document.getElementById(`${template.templateId}_template`)
    if (capture) {
      const canvas = await html2canvas(capture, { scale: 5 })
      const imgWidth = 208
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      let heightLeft = imgHeight
      let position = 0
      heightLeft -= pageHeight
      const doc = new jsPDF("p", "mm")
      doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight, "", "FAST")

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        doc.addPage()
        doc.addImage(
          canvas,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        )
        heightLeft -= pageHeight
      }
      doc.save("resumeer.pdf")
    }
  }
}

export const convertTurkishToEnglish = (inputString: string): string => {
  let turkishToEnglishMap: { [key: string]: string } = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ş: "s",
    Ş: "S",
    ü: "u",
    Ü: "U",
    ı: "i",
    İ: "I",
    ö: "o",
    Ö: "O",
  }
  for (let key in turkishToEnglishMap) {
    inputString = inputString.replace(
      new RegExp(key, "g"),
      turkishToEnglishMap[key]
    )
  }
  return inputString
}
