import "./App.css";

function App() {
  return (
    <div className="relative x-10">
      <div className="container md:container flex items-center justify-center md:bg-mdBg bg-smBg bg-center-left bg-no-repeat bg-cover mx-auto h-[75vh]">
        <div className="flex flex-col justify-center gap-y-4 h-full">
          <span className="text-[#0096c1] text-2xl md:text-4xl md:tracking-wider font-semibold">
            Get Your Work Done Effortlessly
          </span>
          <span className="text-[#ffffff] font-semibold text-2xl md:text-6xl">
            Lauching Soon!
          </span>
          <span className="text-[#ffffff] md:w-3/4 mx-auto text-sm md:text-xl font-medium">
            We're working tirelessly behind the scenes to bring you an amazing
            experience! Thank you for your patience and support
          </span>
          <span className="text-[#ffffff] text-xs md:text-lg font-medium">
            Follow us on social media to catch all the latest updates!
          </span>
          <div className="mx-auto w-full flex gap-x-4 items-center justify-center">
            <a
              href="https://www.instagram.com/gywde/"
              target="_blank"
              className="hover:scale-110 transition-all ease-in"
            >
              <img src="/instagram.png" alt="instagram" />
            </a>
            <a
              href="https://x.com/gywdeofficial"
              target="_blank"
              className="hover:scale-110 transition-all ease-in"
            >
              <img src="/twitter.png" alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/gywde"
              target="_blank"
              className="hover:scale-110 transition-all ease-in"
            >
              <img src="/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
