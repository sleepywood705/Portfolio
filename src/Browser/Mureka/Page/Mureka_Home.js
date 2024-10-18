import "../../../scss/Mureka_Home.scss"
import { MurekaRecommend } from "../Component/Mureka_Recommend"


export function MurekaHomePage({ className }) {
  return (
    <section id="MurekaHomePage" className={className}>
      <MurekaRecommend />
      {/* <MurekaCommunity /> */}
    </section>
  )
}