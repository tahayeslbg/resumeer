import Benefits from "@/components/home/benefits"
import CallToAction from "@/components/home/call-to-action"
import FAQ from "@/components/home/faq"
import Footer from "@/components/home/footer"
import Usage from "@/components/home/usage"

export default function HomePage() {
  return (
    <>
      <main className="container">
        <CallToAction />
        <Benefits />
        <Usage />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
