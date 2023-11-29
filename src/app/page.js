import Character from "@/components/Character"
import Paragraph from "@/components/Paragraph"
import Word from "@/components/Word"

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-800 text-white">
      <div className="h-screen"></div>
      {/* <Paragraph value={paragraph} /> */}
      {/* <Word value={paragraph} /> */}
      <Character value={paragraph} />
      <div className="h-screen"></div>
    </main>
  )
}
