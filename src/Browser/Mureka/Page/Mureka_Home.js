import "../../../scss/Mureka_Home.scss"
import { MurekaRecommand } from "../Component/Mureka_Recommand"


export function MurekaHomePage({ className }) {
  return (
    <section id="MurekaHomePage" className={className}>
      <MurekaRecommand />
      {/* <MurekaCommunity /> */}
    </section>
  )
}

export function MurekaCommunity() {
  return (
    <section id="MurekaCommunity">
      <h2>MBTI 모여라!</h2>
    </section>
  )
}