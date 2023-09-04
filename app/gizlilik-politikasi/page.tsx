import React from "react"

import Footer from "@/components/home/footer"

const GizlilikPolitikasiPage = () => {
  return (
    <>
      <main className="container mt-10 mb-20 space-y-6">
        <section className="space-y-3">
          <h1 className="text-4xl font-bold text-primary sm:text-3xl">
            Gizlilik Politikası
          </h1>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Bu Gizlilik Politikası, Resumeer uygulamasının kullanıcılarının
            kişisel bilgilerini nasıl topladığını, kullandığını ve paylaştığını
            açıklamak amacıyla hazırlanmıştır. Uygulama, kullanıcıların kişisel
            bilgilerini yasalara uygun bir şekilde toplar, kullanır ve paylaşır.
            Bu Gizlilik Politikası, kullanıcıların kişisel bilgilerinin
            korunmasına ilişkin haklarını ve uygulamanın bu konudaki
            yükümlülüklerini açıklar.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Kişisel veriler, kimliği belirli ya da belirlenebilir gerçek kişiye
            ilişkin her türlü bilgiyi ifade eder. Bu sebeple, bu metinde yer
            alan kişisel verilere ilişkin düzenlemeler, ilgili bilgilerin bir
            gerçek kişiye ait olması durumunda uygulanacaktır.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Resumeer, verilerin gizliliğine önem verir ve bilgilerin saklanması
            konusunda şeffaf olmaya özen gösterir. Bu Gizlilik Politikası, hangi
            tür verilerin toplandığını, bu verilerin nasıl kullanıldığı,
            gerekmesi halinde bu bilgilerin kimlerle paylaşıldığı, kişisel
            verilerinize ilişkin hakların neler olduğu ve bu hakların nasıl
            kullanılabileceğini içerir.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Gizlilik Politikasını onaylayan her ziyaretçi resumeer veya resumeer
            aracılığıyla kendisine hizmet sunan kişiler ile resumeer
            aracılığıyla bağlantı kuracağı aşağıdaki durumlarda, buradaki
            sınırlar dahilinde kalmak kaydıyla, kişisel ve/veya kişisel olmayan
            verilerinin işlenmesine, kaydedilmesine, yasal süre, üyelik süresi
            veya resumeer’ın ilan ettiği/edeceği süre boyunca saklanmasına ve
            muhafaza edilmesine, analiz edilmesine, sınıflandırılmasına,
            güncellenmesine, aktarılmasına ve resumeer hizmetlerinin
            sunulabilmesi amacıyla üçüncü kişi iş ortakları ve/veya
            danışmanlarına bu metinde yer alan şartlarda ve bu kapsamda
            aktarılmasına ve onlar tarafından da bu sınırlar dahilinde
            işlenebilmesine açıkça izin ve onay verir.
          </p>
          <ul className="text-slate-700 dark:text-slate-400 space-y-3">
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Kayıt ve hizmet bilgileri:
              </span>{" "}
              Resumeer hizmetlerinden yararlanabilmek için, uygulamaya üye
              olmanız gerekir. Kayıt olmak için adınız-soyadınız, e-posta
              adresiniz ve uygulamada kullanacağınız şifrenizi girmelisiniz.
              Üçüncü şahıs hesaplarıyla (Google hesabınız gibi) kayıt olmak
              istiyorsanız, bu kayıt esnasında ilgili üçüncü şahıs hesabının
              size ait olduğu bilgisini kaydederiz.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Değerlenmesini veya incelenmesini istediğiniz hizmet verileri:
              </span>{" "}
              Resumeer üzerinden tedarik etmek istediğiniz hizmete ilişkin
              girmiş olduğunuz bilgiler, değerlendirilmek üzere resumeer
              veritabanına kaydedilir ve daha sonraki aşamalarda sizlere daha
              iyi hizmet sunmak üzere kullanılır.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                İsteyerek paylaştığınız diğer veriler:
              </span>{" "}
              Başka bağlamlarda gönderdiğiniz kişisel bilgi ya da verileri
              saklayabiliriz.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Kullanım verileri:
              </span>{" "}
              Resumeer’a her başvurduğunuzda, hakkınızda kullanım verileri
              toplanır. Uygulamayı ziyaret ettiğiniz, nelere tıkladığınız, bu
              eylemleri ne zaman gerçekleştirdiğiniz, vb. veriler buna dahil
              olabilir
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Aygıt verileri:
              </span>{" "}
              Hizmetlerimize erişmek için kullandığınız aygıt ve uygulamalardan,
              IP adresiniz, işletim sistemi sürümünüz, cihaz türünüz, sistem ve
              performans bilgileriniz ve tarayıcı türünüz gibi veriler toplanır.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Üçüncü şahıslardan bilgi:
              </span>{" "}
              Üçüncü şahısların bilgilerinizi bizimle paylaşmasına izin
              verirseniz, o üçüncü şahıslardan sizinle ilgili kişisel bilgileri
              ya da verileri toplayabiliriz. Örneğin; resumeer’a Google hesap
              detaylarınızla kayıt olma ve giriş yapma seçeneğini kullanırsanız
              giriş bilgileriniz Google tarafından doğrulanır; biz sadece
              resumeer hesabınızın Google hesabınıza bağlanmasına izin vererek
              Google hesabınız hakkında bizimle paylaşmayı açıkça kabul
              ettiğiniz bilgileri toplarız.
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">
            KİŞİSEL VERİLERİN İŞLENMESİ VE İŞLENME AMAÇLARI
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Resumeer’ın topladığı bilgiler, resumeer’ın sizlere hizmet
            sunabilmek, hizmetleri optimize etmek, geliştirmek ve veritabanını
            zenginleştirerek bu veritabanı sayesinde kullanıcılara sunulan
            hizmeti iyileştirmek için çeşitli şekillerde toplu halde
            kullanılabilir. Resumeer bu bilgileri uygulama, güvenlik, tanıtım
            etkinlikleri, araştırma ve analiz için kullanabilir. Toplanan hiçbir
            bilgi kamuya açıklanmayacaktır. Ancak bilgilerinizin,
            anonimleştirilmek şartıyla tarafımızca kullanılması veya üçüncü
            kişilerle paylaşılması da mümkündür.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Müşterilerin resumeer ile paylaştığı ve/veya resumeer tarafından bu
            metin kapsamında elde edilen bilgiler, ilgili hizmetin tedariki
            aşamasında birlikte çalışan iş ortağı haricinde, bu metinde yer alan
            hükümler saklı kalmak kaydıyla, herhangi bir şekilde üçüncü kişi
            veya kurumlarla paylaşılmamaktadır. Resumeer, bu verileri kendi
            veritabanını geliştirmek ve müşterilerine daha iyi hizmet sunabilmek
            için, sadece kendisinin erişimine açık şekilde depolamaktadır.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Uygulamayı her ziyaret ettiğinizde, IP adresiniz, işletim
            sisteminiz, kullandığınız tarayıcınız (chrome, explorer vs.),
            bağlantı zamanı ve süre bilgileriniz ve benzeri bilgiler otomatik
            olarak kaydedilmekte olup; izniniz gerekmeksizin elde edilen bu
            bilgilerinizin 3. şahıslarla paylaşılmamak kaydıyla resumeer
            tarafından kişisel bilgilerinizle ilişkilendirilerek veya anonim
            olarak kullanılması mümkündür.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Resumeer’ın sunmuş olduğu hizmetlerden faydalanabilmeniz için alınan
            tüm bilgiler tabi olduğumuz kişisel verilerin korunmasına ilişkin
            mevzuat kapsamındaki yükümlülüklerimize uygun olarak korunmaktadır.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Resumeer, üçüncü taraf iş ortakları başta olmak üzere, yasal
            yükümlülükler veya resumeer sistem işleyişi kapsamında ilgili
            bilgilere erişime ihtiyaç duyan çalışanları ve iş ortaklarına,
            bilgilere ilgili mevzuat kapsamında ve ihtiyaç duyulan kadar kısıtlı
            erişim olanağı tanır.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">
            KİŞİSEL VERİLERİNİZİN AKTARILMASI, AKTARILMA AMACI VE AKTARILACAK
            ALICI GRUPLARI
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Toplanan kişisel verileriniz, bu verilerin depolanması veya bu
            metinde yer alan hukuka uygun amaçlarla, denizaşırı ve
            kullanıcının/üyenin bulunduğu ülke ve yargı bölgesinden başka dünya
            çapındaki ülkelere, başka bir ülkede bulunan sunuculara
            aktarılabilir, işleme alınabilir ve depolanabilir. Resumeer, kişisel
            veriler dâhil olmak üzere kullanıcıların/üyelerin bilgilerini,
            bulundukları yargı bölgesindeki veri koruma yasalarının
            aynısına/benzerine sahip olmayan başka bir ülke ve yargı bölgesine
            aktarabilir.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Resumeer’ın yasalar karşısındaki yükümlülüklerini ifa etmesi
            amacıyla (suçla mücadele ve devlet ve kamu güvenliğinin tehdidi
            benzeri bilgi verme yükümlülüğünün mevcut olduğu durumlarda) kişisel
            verileri talep etmeye yetkili olan kamu kurum ve kuruluşları ile
            kişisel verileriniz paylaşılabilir.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Resumeer, kendi şart ve koşullarını gerçekleştirmek ya da işlem veya
            kullanıcı güvenliğini sağlamak için, hukuken yetkisi bulunan
            durumlarda, makul bir açıklamanın gerekli olduğunu kabul ederse,
            bilgileri üçüncü kişilerle paylaşabilir.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">ÇEREZLER</h2>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Çerezler, sürekli kullanıcıları tanımamız için hizmetlerimize
            erişirken kullandığınız cihazda sakladığımız küçük veri
            dosyalarıdır. Kullanma nedenimize bağlı olarak tüm çerezlerin süresi
            belirli bir zaman sonra sona erer. Çerezler birkaç nedenle
            kullanılır:
          </p>
          <ul className="text-slate-700 dark:text-slate-400 space-y-3">
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Platform’un daha kolay kullanılmasını sağlamak için:
              </span>{" "}
              Hesabınıza girişi hızlandırmak için “Beni hatırla” özelliğini
              kullanırsanız, kullanıcı adınızı bir çerez içinde depolayabiliriz.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Güvenlik sebepleri:
              </span>{" "}
              Çerezleri, kimliğinizi doğrulamak (veya örneğin oturumunuzun
              uygulamada hala açık olup olmadığını anlamak) için kullanırız.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Sizlere kişiselleştirilmiş içerik sunmak için:
              </span>{" "}
              Görüntülediğiniz içeriği kişiselleştirmek için varsayılan dil gibi
              kullanıcı tercihlerini çerezlerde depolayabiliriz.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Hizmetlerimizi geliştirmek için:
              </span>{" "}
              Uygulamanın sizin tarafınızdan kullanımını ölçmek, yönlendirme
              verilerini takip etmek ve bazen de size farklı içerik versiyonları
              göstermek için çerezler kullanırız. Bu bilgiler, servislerimizi
              geliştirip iyileştirmemize ve kullanıcılara gösterdiğimiz içeriği
              en iyi hale getirmemize yardımcı olur.
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">
            KULLANIM BAKIMINDAN ÇEREZ TÜRLERİ
          </h2>

          <ul className="text-slate-700 dark:text-slate-400 space-y-3">
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Kullanılması Zorunlu Olan Çerezler:
              </span>{" "}
              Bu Çerezler, uygulamanın düzgün şekilde çalışması için mutlaka
              gerekli olan çerezlerdir. Bu çerezlere, sistemin yönetilebilmesi,
              sahte işlemlerin önlenmesi için ihtiyaç duyulur ve engellenmesi
              halinde Site düzgün çalışamaz.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Analiz/Performans Çerezleri:
              </span>{" "}
              Bu Çerezler, uygulamanın işleyişini analiz edip anlamımızı
              sağlayan ve sizinle etkileşime geçerek uygulamayı geliştirmemizi
              sağlar. Bu çerezlerin kullanımı engellenebilir.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                İşlev Çerezleri:
              </span>{" "}
              Bu çerezler size daha kolay ve gelişmiş bir kullanıcı deneyimi
              yaşatmak için kullanılan çerezlerdir. Önceki tercihlerinizi
              hatırlamak, uygulama üzerinde yer alan bazı içeriklere rahatça
              erişmenizi sağlamak gibi işlevler yerine getirir. Bu çerezlerin
              kullanımı engellenebilir.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Hedefleme/Reklam Çerezleri:
              </span>{" "}
              Bu çerezler, size, reklam içerikleri de dâhil olmak üzere,
              ilginizi çekebilecek içerikleri saptayarak sunmamız için
              kullanılmaktadır. Bu çerezlerin kullanımı engellenebilir. Ancak bu
              engelleme, reklam içeriklerini bütünüyle engellemeyecek sadece
              ilginizi çekebilecek reklamlar yerine genel içerikli reklamlar
              sunulacaktır.
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">
            SAKLANDIĞI SÜRE BAKIMINDAN ÇEREZ TÜRLERİ
          </h2>

          <ul className="text-slate-700 dark:text-slate-400 space-y-3">
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Kalıcı Çerezler (Persistent Cookies):
              </span>{" "}
              Kişinin bilgisayarında veya mobil cihazında kişi tarafından
              silinene veya belirli bir tarihe varlığını sürdüren çerezlerdir.
              Bu çerezler, çoğunlukla kullanıcıların tercihlerini ve site
              hareketlerini ölçmek amacıyla kullanılır.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Oturum Çerezleri (Session Cookies):
              </span>{" "}
              Bu çerezler kullanıcının ziyaretini oturumlara ayırmak için
              kullanılır ve kullanıcıdan veri toplamaz. Bu çerezler, kullanıcı
              ziyaret ettiği web sayfasında belirli bir süre pasif kaldığında
              veya bu web sayfasını kapattığında silinir. Uygulamada üçüncü
              kişilerin hizmet sağlaması için ve bu hizmetlerin etkinliğini
              artırmak için hedef ve izleme çerezleri kullanılır. Bu çerezler,
              ziyaret ettiğiniz web sayfalarını ve siteleri hatırlayabilir ve
              başta kullanıcı cihazının IP adresi olmak üzere kişisel verileri
              toplayabilir. Platform, bilgi toplamak, demografik verileri ve
              ilgi alanlarınızı hatırlamak, size hedeflenmiş reklamları sunmak,
              reklam gösterimleri ve ziyaret edilme sayısını belirlemek gibi
              durumlar için hem birinci taraf hem de üçüncü taraf çerezlerini
              kullanmaktadır. Uygulama; Google gibi ağlara bağlantı sağlayan ağ
              eklentilerden faydalanmaktadır. Uygulamayı ziyaret ettiğinizde ve
              bu eklentileri kullandığınızda, Uygulama doğrudan seçilen ağın
              sunucusuna bağlanır. Ardından, eklentinin sunduğu içerik doğrudan
              ağlardan web tarayıcınıza iletilir ve ziyaret etmekte olduğunuz
              web sitesine eklenir. Böylelikle ilgili ağ size ait verilere
              ulaşarak işleyebilir ve ilgili ağdaki hesabınıza ait verilerle
              birleştirebilir.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                İşlev Çerezleri:
              </span>{" "}
              Bu çerezler size daha kolay ve gelişmiş bir kullanıcı deneyimi
              yaşatmak için kullanılan çerezlerdir. Önceki tercihlerinizi
              hatırlamak, uygulama üzerinde yer alan bazı içeriklere rahatça
              erişmenizi sağlamak gibi işlevler yerine getirir. Bu çerezlerin
              kullanımı engellenebilir.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold text-slate-900 dark:text-slate-100 ">
                Hedefleme/Reklam Çerezleri:
              </span>{" "}
              Bu çerezler, size, reklam içerikleri de dâhil olmak üzere,
              ilginizi çekebilecek içerikleri saptayarak sunmamız için
              kullanılmaktadır. Bu çerezlerin kullanımı engellenebilir. Ancak bu
              engelleme, reklam içeriklerini bütünüyle engellemeyecek sadece
              ilginizi çekebilecek reklamlar yerine genel içerikli reklamlar
              sunulacaktır.
            </li>
          </ul>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Resumeer’ın, ağların eklentiler aracılığıyla işlediği veriler
            üzerinde herhangi bir kontrolü yoktur. Ağların kişisel verilerinizi
            hangi amaçla, yöntemlerle ve süreyle işleyeceğine ilişkin daha fazla
            bilgi almak için ilgili sosyal ağlar tarafından yayınlanan kişisel
            veri politikaları dikkatlice incelenmelidir.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">
            Kullandığınız İnternet tarayıcısı genellikle Çerezler kabul edilmiş
            şekilde açılmaktadır. Ancak dilediğiniz an bu ayarları
            değiştirebilir ve Çerezleri devre dışı bırakabilirsiniz. Eğer
            Çerezleri devre dışı bırakmaya karar verirseniz; yukarıda
            açıklandığı üzere Site’de sunduğumuz hizmetlerden işlevsel olarak
            faydalanamayabilirsiniz. Unutulmamalıdır ki, eğer çerezlerin devre
            dışı bırakılması için gerekli tarayıc ayarlarınızı yapmazsanız,
            çerezlerin tarafımızca kullanılması için onay vermiş sayılacaksınız.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">
            DEĞİŞİKLİKLER VE GÜNCELLEMELER
          </h2>

          <p className="text-base text-slate-700 dark:text-slate-400">
            Bu Gizlilik Politikası zaman zaman değiştirilebilir. Değişiklikler
            yapıldığında, bu websitesinde veya e-posta yoluyla güncellenmiş
            Gizlilik Politikası yayınlanacaktır.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default GizlilikPolitikasiPage
