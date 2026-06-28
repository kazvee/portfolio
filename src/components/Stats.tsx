const Stats: React.FC = () => {
  return (
    <section className="pt-2 md:pt-10" id="stats">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My GitHub Stats
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-2">
        <a
          href="https://github.com/kazvee#-at-a-glance"
          aria-label="View my GitHub activity stats"
        >
          <img
            src="https://raw.githubusercontent.com/kazvee/my-github-stats/main/images/kazvee-github-stats.svg"
            alt="My GitHub activity stats"
            width={440}
            height={456}
          />
        </a>
      </div>
      <div className="flex flex-row justify-center items-center">
        <img
          src="https://raw.githubusercontent.com/kazvee/my-github-stats/main/images/kazvee-github-snake-dark.svg"
          alt="My GitHub Contributions Graph as a Snake Game"
          width={660}
          height={144}
        />
      </div>
    </section>
  );
};

export default Stats;
