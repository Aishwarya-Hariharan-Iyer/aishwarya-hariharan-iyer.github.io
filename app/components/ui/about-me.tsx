import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Hi There!",
    description:
      "I am a Year 4 undergrad at the National University of Singapore (NUS), pursuing Computer Science (Hons.) and enrolled in the University Scholars Programme (USP). I specialise in the Artificial Intellience and Software Engineering focus areas.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src="/profile.png"
          alt="linear board demo"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "What Do I Love?",
    description:
      "I love intellectual adventures - challenging problem statements that invite the use of creative and technial depth. Capturing patterns in data and socially meaningful causes are the two other pillars of my interest.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src="/aish-1.jpg"
          alt="linear board demo"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },

  {
    title: "What Can I Offer?",
    description:
      "Through my industrial and research internships, as well as my passion projects, I have built skills in the areas of web development, data analysis and dashboard construction, machine learning, deep learning, natural language processing, computer vision and signal processing. I have often anchored myself in the tenets of rigorous research and an agile workflow.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src="/aish-2.jpg"
          alt="linear board demo"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },

{
  title: "Still there? Here's A Poem From Me!",
  description: `And so I think and I wander,
In the defiant wilderness of thoughts.
As my soul blooms in rapturous wonder,
I become all that I had sought.`,
  content: (
    <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      <img
        src="/aish-3.jpg"
        alt="poem visual"
        className="h-full w-full object-cover"
      />
    </div>
  ),
},

];

export function About() {
  return (
    <div>
  <div className="p-7">
      <StickyScroll content={content} />
    </div>
    </div>
  );
}