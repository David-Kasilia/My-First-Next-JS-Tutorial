const HeroSection = () => {
  return (
    <section className="hero-section container mx-auto mt-12 text-center">
      <div className="container mx-auto">
        <h1 className="mb-5 font-bold text-6xl">PromptVerse</h1>
        <h2 className="text-black mb-8 font-semibold text-3xl">
          Unleashing Creative Dialogues and Artful Inspirations
        </h2>
        <p className="text-black mb-8 leading-8">
          PromptVerse, a product of Binnotech Organization, is an innovative
          platform blending ChatGPT&apos;s engaging conversations with
          Leonardo&apos;s AI-generated art prompts. This dynamic fusion creates
          a space where users can explore a spectrum of dialogues and unleash
          their artistic potential. As Binnotech&apos;s flagship product,
          PromptVerse stands at the forefront of redefining the intersection of
          technology and creativity, providing users with a transformative and
          inspiring experience.
        </p>
        <button className="bg-black text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
