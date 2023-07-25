import React from "react"

import { Icons } from "../icons"

const Benefits = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto mt-20 mb-40 sm:mt-[60px] sm:mb-[120px] space-y-16">
      <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        <div className="w-full max-w-{612px] p-24 sm:p-20 border-[2px] border-border rounded-xl flex justify-center items-center">
          <Icons.benefit1 className="stroke-slate-200 dark:stroke-slate-800" />
        </div>
        <div className="w-full max-w-{612px] flex flex-col justify-center lg:order-first md:order-first sm:order-first lg:max-w-full md:max-w-full sm:max-w-full lg:mb-10 md:mb-10 sm:mb-10">
          <div className="max-w-[460px] mx-auto space-y-8 lg:max-w-full md:max-w-full sm:max-w-full">
            <h2 className="text-3xl sm:text-2xl font-bold mx-auto text-primary">
              Daha Hızlı, Daha Doğru CV Oluşturucu
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mx-auto">
              CV oluşturucumuz, yapay zeka desteği sayesinde CV’nizi daha hızlı
              ve daha doğru bir şekilde oluşturmanıza yardımcı olur.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        <div className="w-full max-w-{612px] flex flex-col justify-center lg:max-w-full md:max-w-full sm:max-w-full">
          <div className="max-w-[460px] mx-auto space-y-8 lg:max-w-full md:max-w-full sm:max-w-full lg:mb-10 md:mb-10 sm:mb-10">
            <h2 className="text-3xl sm:text-2xl font-bold mx-auto text-primary">
              Daha Kolay Kullanım
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mx-auto">
              Resumeer’ın gelişmiş arayüzü sayesinde 3 adımlık süreçten sonra
              CV’nizi kolay bir şekilde oluşturacak, zamandan tasarruf
              edeceksiniz.
            </p>
          </div>
        </div>
        <div className="w-full max-w-{612px] p-24 sm:p-20 border-[2px] border-border rounded-xl flex justify-center items-center">
          <Icons.benefit2 className="stroke-slate-200 dark:stroke-slate-800" />
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto grid grid-cols-2 gap-8 sm:grid-cols-1">
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-primary flex items-start">
            <Icons.award className="mr-2 shrink-0" /> CV’nizi Profesyonel ve
            Özgün Yapın
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Format seçimi ile cv’nin profesyonel ve özgün görünmesini sağlar.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-primary flex items-start">
            <Icons.target className="mr-2 shrink-0" /> Yapay Zeka ile CV’nizin
            Hatalarını Düzeltin
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Yapay zeka ile cv’nin dilbilgisi, yazım ve noktalama hataları
            düzeltilir.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-primary flex items-start">
            <Icons.heartHandShake className="mr-2 shrink-0" /> Yapay Zeka ile
            CV’nizin Etkinliğini Artırın
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Yapay zeka cv’nin uygunluğunu ve etkileyiciliğini ölçer ve
            açıklamayı buna göre optimize eder.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-primary flex items-start">
            <Icons.table className="mr-2 shrink-0" /> Minimal Tasarımlı Temalar
            ile Fark Yaratın
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Temaların minimal tasarımı ile cv’nin okunabilirliğini ve estetiğini
            artırır.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
