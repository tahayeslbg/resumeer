"use client"

import React, { useState } from "react"

import { Icons } from "../icons"

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const handleClick = (question: number) => {
    if (openQuestion === question) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion(question)
    }
  }

  return (
    <section className="w-full max-w-[1080px] mx-auto mt-20 mb-40 sm:mt-[60px] sm:mb-[120px] space-y-6">
      <div
        onClick={() => handleClick(1)}
        className="pb-4 border-b border-border cursor-pointer space-y-3"
      >
        <h5 className="text-2xl font-bold text-primary flex justify-between items-center">
          Resumeer’ı kullanmak ücretsiz mi?
          {openQuestion === 1 ? (
            <Icons.minus className="shrink-0" />
          ) : (
            <Icons.plus className="shrink-0" />
          )}
        </h5>
        {openQuestion === 1 && (
          <p className="text-base text-slate-700 dark:text-slate-400">
            Kısmen, Resumeer’ı kullanırken ücretsiz olarak yalnızca 1 tane cv
            oluşturabilir ve 1 kez yapay zeka destekli editörü
            kullanabilirsiniz.
          </p>
        )}
      </div>
      <div
        onClick={() => handleClick(2)}
        className="pb-4 border-b border-border cursor-pointer space-y-3"
      >
        <h5 className="text-2xl font-bold text-primary flex justify-between items-center">
          CV’mi hangi formatlarda indirebilirim?
          {openQuestion === 2 ? (
            <Icons.minus className="shrink-0" />
          ) : (
            <Icons.plus className="shrink-0" />
          )}
        </h5>
        {openQuestion === 2 && (
          <p className="text-base text-slate-700 dark:text-slate-400">
            Henüz uygulamamızın yeni olması sebebiyle yalnızca pdf formatında
            indirebilirsiniz. İlerleyen zamanlarda diğer formatlarda da
            indirebileceksiniz.
          </p>
        )}
      </div>
      <div
        onClick={() => handleClick(3)}
        className="pb-4 border-b border-border cursor-pointer space-y-3"
      >
        <h5 className="text-2xl font-bold text-primary flex justify-between items-center">
          CV şablonlarınızı kim oluşturdu?
          {openQuestion === 3 ? (
            <Icons.minus className="shrink-0" />
          ) : (
            <Icons.plus className="shrink-0" />
          )}
        </h5>
        {openQuestion === 3 && (
          <p className="text-base text-slate-700 dark:text-slate-400">
            CV şablonlarımız, insan kaynakları departmanında çalışan kişilere
            sorularak aynı zamanda denenmiş cv şablonlarını optimize ederek
            oluşturulmuştur.
          </p>
        )}
      </div>
      <div
        onClick={() => handleClick(4)}
        className="pb-4 border-b border-border cursor-pointer space-y-3"
      >
        <h5 className="text-2xl font-bold text-primary flex justify-between items-center">
          Oluşturmuş olduğum cv herhangi bir yerde kullanılacak mı?
          {openQuestion === 4 ? (
            <Icons.minus className="shrink-0" />
          ) : (
            <Icons.plus className="shrink-0" />
          )}
        </h5>
        {openQuestion === 4 && (
          <p className="text-base text-slate-700 dark:text-slate-400">
            Hayır. Resumeer aracılığıyla oluşturduğunuz cv’lere yalnızca siz
            erişebilirsiniz ve bilgileriniz gizli ve yalnızca sizin için görünür
            kalır.
          </p>
        )}
      </div>
    </section>
  )
}

export default FAQ
