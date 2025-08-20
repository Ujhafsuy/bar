import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"

import { TeamMemberCard } from "../components/common/TeamMemberCard/index"

const teamMembers = [
  {
    name: "Bruno",
    instagram: "@brunomv06",
    variant: "primary",
  },
  {
    name: "Eduardo",
    instagram: "@ujhafsuy",
    variant: "secondary",
  },
  {
    name: "Pedro Reis",
    instagram: "@__phrl",
    variant: "primary",
  },
  {
    name: "David Ferreira",
    instagram: "@david_jf",
    variant: "secondary",
  },
  {
    name: "Lorena Cardoso",
    instagram: "@lennasantf",
    variant: "primary",
  },
]

function Time() {
  return (
    <div className="bg-(--bg-normal-pages)">
        <Header />
        <div className="min-h-screen py-[6rem] px-4 text-(--text-normal-color)">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">TEAM</h1>

            <div className="space-y-6">
            {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} name={member.name} instagram={member.instagram} variant={member.variant} />
            ))}
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Time