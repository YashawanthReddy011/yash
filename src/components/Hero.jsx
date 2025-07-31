import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
      {/* 🔹 Background Video */}
      {/*<video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/back/217643_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}

      {/* 🔹 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      {/* 🔹 Content */}
      <div className="relative z-20 text-center text-white px-4 flex flex-col items-center">
        
        {/* 🖼️ Profile Photo */}
        <img
  src="images/y1.jpg" // ✅ this will load from public/y1.jpg
  alt="Profile"
  className="w-40 h-40 rounded-full mb-6 border-4 border-indigo-500 shadow-lg"
/>


        <h1 className="text-5xl font-bold text-white dark:text-yellow-300 mb-4">Hi, I'm D Yashwanth Reddy</h1>

        <h2 className="text-2xl text-white dark:text-yellow-300 mb-6">
          <Typewriter
            options={{
              strings: ['Web Developer', 'Java Programmer', 'React Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded text-white dark:text-yellow-300"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 hover:bg-indigo-700 text-white dark:text-yellow-300 px-6 py-2 rounded"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
