import React, { useState } from 'react';

const texts = [
  {
    title: "Principles of Transformation",
    content: "Welcome to a collection of principles that shaped my journey from struggle to success. These aren't just ideas; they're the cornerstones of a life transformed. Each principle emerged from moments of challenge, revelation, and growth. They guided me from the brink of failure to the heights of the tech world. As you explore, remember: every ending is just a new beginning."
  },
  {
    title: "The Power of Alliances",
    content: "At 18, facing the daunting challenge of high school, I learned the first crucial lesson: we're stronger together. Forming an alliance with my neighbor Yassine wasn't just about passing exams; it was about creating a support system in the face of adversity. This partnership taught me that shared goals can turn competitors into collaborators, and that the right alliance can be a catalyst for mutual success."
  },
  {
    title: "Embracing Isolation's Gift",
    content: "Isolation, often seen as a setback, became an unexpected ally. In the quiet moments of solitude, I discovered the space to confront my weaknesses and transform them into strengths. This period taught me that discomfort is often the precursor to growth, and that embracing challenging circumstances can lead to profound personal development."
  },
  {
    title: "The Mountain of National Exams",
    content: "The bac, Tunisia's national high school exam, loomed like an insurmountable mountain. It wasn't just a test; it was a rite of passage that would determine my future. Facing this challenge taught me the value of persistence and the importance of breaking large goals into manageable steps. Each study session, each practice test, was a step up that mountain."
  },
  {
    title: "The Transformative Power of a Mentor",
    content: "Enter Mr. Béchir, the teacher who changed everything. He didn't just teach math; he illuminated the path of possibility. Through his guidance, I learned that education is more than memorization—it's about understanding concepts and applying them to life. This experience showed me the profound impact a dedicated mentor can have, inspiring me to seek and value mentorship throughout my journey."
  },
  {
    title: "Mathematics: The Language of Logic",
    content: "The day math clicked was the day the world changed. Suddenly, it wasn't just about numbers on a page; it was a way of thinking, a tool for problem-solving that extended far beyond the classroom. This epiphany taught me to look for underlying principles in every challenge, breaking complex problems into solvable equations."
  },
  {
    title: "Persistence Opens Doors",
    content: "Getting into university wasn't just about grades; it was about relentless persistence. When my scores weren't enough, I didn't give up. Instead, I navigated bureaucracy, gathered documents, and made my case. This experience taught me that there's often more than one path to a goal, and that persistence can create opportunities where none seemed to exist."
  },
  {
    title: "The Real Lessons of University",
    content: "At ISTIC, I quickly realized that university offers more than just formal education. It's a training ground for life skills—time management, self-discipline, and the art of learning itself. This period taught me to see education as a holistic experience, where every interaction and challenge is an opportunity for growth."
  },
  {
    title: "Financial Wisdom in Scarcity",
    content: "Securing a scholarship was more than financial aid; it was a lesson in resource management and the value of every opportunity. Living on a tight budget taught me to prioritize, to distinguish between needs and wants, and to see constraints as invitations for creativity and innovation."
  },
  {
    title: "Hunger for Knowledge",
    content: "There were times when the hunger for knowledge literally outweighed physical hunger. These moments of sacrifice taught me about passion and priorities. I learned that true growth often requires pushing beyond comfort zones and that the pursuit of knowledge can be a driving force more powerful than basic needs."
  },
  {
    title: "The Serendipity of Opportunity",
    content: "A chance Facebook post about Azure certifications changed the trajectory of my life. This experience taught me the importance of staying open and alert to opportunities, no matter how unexpected their source. It reinforced the idea that life-changing moments often come disguised as ordinary events."
  },
  {
    title: "Diving into the Unknown",
    content: "Learning cloud computing felt like diving into a vast, unknown ocean. It was daunting, often overwhelming, but exhilarating. This journey taught me the value of embracing uncertainty, of learning to swim by diving in, and of trusting in my ability to adapt and grow in new environments."
  },
  {
    title: "Certifications: Milestones of Mastery",
    content: "Each certification wasn't just a piece of paper; it was a milestone in a journey of mastery. The process of studying, failing, and ultimately succeeding in these exams taught me about resilience, the power of incremental progress, and the importance of celebrating small victories on the path to bigger goals."
  },
  {
    title: "Breaking Geographical Barriers",
    content: "Landing a remote tech job while still in Africa was more than a career move; it was a paradigm shift. It taught me that in the digital age, opportunities are global, and that with the right skills and mindset, one can transcend geographical limitations and compete on a global stage."
  },
  {
    title: "The Leap to Qatar",
    content: "Moving to Qatar for an onsite job was a leap into the unknown. It taught me about courage, adaptability, and the growth that comes from stepping out of one's comfort zone. This experience reinforced the idea that sometimes, the biggest risks yield the greatest rewards."
  },
  {
    title: "The Security Imperative",
    content: "Developing a passion for cybersecurity wasn't just about protecting data; it was about understanding the critical role of trust in the digital age. This focus taught me about the responsibility that comes with knowledge and the importance of integrity in the tech world."
  },
  {
    title: "Accelerated Learning",
    content: "Condensing years of experience into months of intense learning wasn't just about acquiring knowledge quickly; it was about developing a mindset of continuous, rapid adaptation. This approach taught me that learning is a skill that can be honed and accelerated, and that with the right mindset, there are no limits to how quickly one can grow."
  },
  {
    title: "The Power of Practical Experience",
    content: "Completing over 1000 cloud assessments wasn't just about quantity; it was about the depth of understanding that comes from hands-on experience. This taught me the invaluable lesson that true expertise comes from doing, from facing real-world challenges and finding solutions."
  },
  {
    title: "Badges of Lifelong Learning",
    content: "Earning 31 certifications across different platforms wasn't about collecting badges; it was about committing to lifelong learning. This journey taught me that in the fast-paced tech world, staying relevant means staying curious and always being ready to learn something new."
  },
  {
    title: "From Learner to Leader",
    content: "Sharing my journey isn't just about telling a story; it's about lighting the way for others. This transition from learner to leader taught me about the responsibility of success and the power of inspiration. It showed me that our struggles and triumphs can become beacons of hope for others facing similar challenges."
  },
  {
    title: "The Continuous Journey",
    content: "Looking back on this journey, I realize that every end is truly a new beginning. The principles that guided me here continue to evolve, shaping not just my career but my approach to life. As I stand at this point, I'm filled with curiosity about what's next. What new challenges will arise? What opportunities will emerge? The journey continues, and I'm excited to see where it leads. What's your next chapter?"
  }
];

const ButtonSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handleNumberClick = (index) => {
    setCurrentIndex(index);
  };

  const isLastSlide = currentIndex === texts.length - 1;

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-serif">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-2xl px-4 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {texts[currentIndex].title}
          </h2>
          <p 
            className={`text-lg sm:text-xl md:text-2xl mb-8 transition-all duration-500 ${isLastSlide ? 'text-yellow-300' : ''}`}
            style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            {texts[currentIndex].content}
          </p>
          <button
            onClick={handleNext}
            className={`text-6xl sm:text-7xl md:text-8xl focus:outline-none transition-all duration-300 transform hover:scale-110 active:scale-95 ${isLastSlide ? 'animate-pulse' : ''}`}
            aria-label="Next"
            style={{
              fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              textShadow: isLastSlide 
                ? '0 0 10px rgba(255,255,0,0.7), 0 0 20px rgba(255,255,0,0.5)' 
                : '0 0 8px rgba(255,255,255,0.5), 0 0 16px rgba(255,255,255,0.3)',
              filter: isLastSlide
                ? 'drop-shadow(0 0 15px rgba(255,255,0,0.5))'
                : 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
            }}
          >
            ⦿
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto py-4 bg-black border-t border-gray-800">
        <div className="flex justify-between px-2 sm:px-4 min-w-max">
          {texts.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(index)}
              className={`mx-1 px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                currentIndex === index 
                  ? 'bg-gray-800 text-white font-bold'
                  : 'bg-transparent text-gray-500 hover:bg-gray-900 hover:text-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonSwiper;