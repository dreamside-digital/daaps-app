const Hint = ({ title, body }) => {
  return (
    <div className="hint py-5">
      <div className="image bg-yellow h-12 w-12 rounded-full mb-4" />
      <h2 className="text-xl mb-2">{title}</h2>
      <p>{body}</p>
    </div>
  )
}


const HowTo = () => (
  <div className="flex-grow overflow-auto">
    <div className="container mx-auto p-5 pt-1">
      <Hint
        title="When you’re out and about"
        body="Draw a prompt when you go for a walk, when you’re hanging out in the park, or when you’re waiting for public transit, wherever you are in the world."
      />

      <Hint
        title="With what you have handy"
        body="Interpret the prompts by creatively using and misusing the everyday digital tools you have in your phone, tablet, laptop, multitool, or other device."
      />

      <Hint
        title="Share the story of your journey"
        body="Make something. Tell your story. Create a work of art based on your experience. Film it. Record audio. Take pictures and screenshots. And share! Tag with #DirectionsToNowhere."
      />

      <Hint
        title="Notice what you notice"
        body="Open your mind and open your senses. These prompts are meant to change the way you see what’s around you. "
      />

      <Hint
        title="You don’t have to be literal"
        body="Don’t feel that you have to execute the prompt exactly. Change the prompts to suit your strengths, abilities, and interests. Perhaps just use them to alter the ways you perceive, interpret, and reflect on your relationships to the spaces around you."
      />

      <div className="hint py-5">
        <h2 className="text-2xl mb-5">Code of Conduct</h2>
        <p><span className="font-sans-bold">Be safe. </span>Don’t do anything that puts yourself or others at risk. Stay aware of your surroundings. And follow your local health and safety guidelines.</p>

        <p><span className="font-sans-bold">Be kind. </span>Care for your community. We do not tolerate hatred, derision, harassment, threatening behavior, or abuse of any kind against any individual or group.</p>

        <p><span className="font-sans-bold">Be respectful. </span>Navigate public space gently and considerately. Do not vandalize or infringe on the property of others.</p>
      </div>

    </div>
  </div>
)

export default HowTo
