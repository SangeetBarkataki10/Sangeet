const Hero = () => {
  return (
    <div className="flex flex-col gap-4 bg-two">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-bold text-white">About Sangeet</h1>
        <h1 className="w-3/4 font-bold text-white text-xl">
          Sangeet Barkataki is an ambitious software developer by day, and a
          passionate singer-songwriter by night who draws deep inspiration from
          the communities he grew up around.
        </h1>
      </div>
      <div className="flex flex-col gap-4 py-4 px-15">
        <h1 className="text-4xl font-bold text-white">
          Sangeet, সংগীত - Music
        </h1>
        <h1 className="text-white">
          Music had been an integral part of Sangeet's life for as long as he
          can remember. He grew up surrounded by music from a young age,
          listening to the vibrant melodies of Assam, a state in Northeast India
          where his parents emigrated from. As he attempted to emulate the songs
          he enjoyed hearing, he developed a voice through singing and
          performance, always wanting to bring the color of music to other's
          ears.
        </h1>
        <h1 className="text-4xl font-bold text-white">
          Barkataki, বৰকটাকি - Great Ambassador
        </h1>
        <h1 className="text-white">
          A great emissary not only conveys a message, but it delivers it in
          multiple forms for a variety of people. From developing B2B products
          for the music industry to ethnomusicological research and even
          releasing his own music, Sangeet aims to do exactly that. He finds
          great passion in what he does and the impact such works can have on
          people and society at large. For information on his ongoing and
          completed projects, read more down below or click on the Projects tab
          on the navigation for a more extensive breakdown.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
