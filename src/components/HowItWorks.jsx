export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      step: "Browse Projects",
      description:
        "Each project comes with clear instructions, resources, and optional starter code to help you along the way.",
    },
    {
      id: 2,
      step: "Follow the Guide",
      description:
        "Explore our weekly curated list of beginner-friendly projects designed to build practical skills.",
    },
    {
      id: 3,
      step: "Build and Practice",
      description:
        "Dive in and start coding! Get hands-on experience by completing the weekly tasks at your own pace.",
    },
    {
      id: 4,
      step: "Share and Get Feedback",
      description:
        "Showcase your work to the community, ask questions, and receive constructive feedback from peers and mentors.",
    },
    {
      id: 5,
      step: "Grow Your Portfolio",
      description:
        "Accumulate a portfolio of real-world projects that demonstrate your skills to potential employers.",
    },
  ];
  const currentStep = 5;
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">
        <span className="p-0.5 mr-2 bg-bprimary"></span>{" "}
        <span>How It Works</span>
      </h2>

      <div className="flex justify-center items-center">
        <ul className="steps steps-vertical sm:steps-horizontal">
          {steps.map((step,index) => (
            <li key={index}
              className={`step ${
                step.id <= currentStep
                  ? "step-primary"
                  : "step-secondary-content"
              }`}
            >
              <div className="space-y-2 h-52 overflow-hidden">
                <h1 className="font-semibold">{step.step}</h1>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
