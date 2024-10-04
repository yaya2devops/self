import React, { useState, useEffect, useCallback, useRef } from 'react';

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
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 90 }); // Default position, further down
  const containerRef = useRef(null);

  const handleNext = () => {
    if (!isDragging) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  };

  const handleNumberClick = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - container.left) / container.width) * 100;
      const y = ((e.clientY - container.top) / container.height) * 100;
      setPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    }
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  const isLastSlide = currentIndex === texts.length - 1;

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: 'black', 
      color: 'white', 
      fontFamily: 'serif' 
    }}>
      <div 
        ref={containerRef}
        style={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '1rem',
          position: 'relative',
        }}
      >
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '42rem', 
          width: '100%',
          padding: '0 1rem', 
          marginBottom: '2rem'
        }}>
          <div style={{ 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            borderRadius: '0.5rem', 
            padding: '1.5rem', 
            marginBottom: '2rem' 
          }}>
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>
              {texts[currentIndex].title}
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              transition: 'all 0.5s',
              color: isLastSlide ? '#FDE68A' : 'white'
            }}>
              {texts[currentIndex].content}
            </p>
          </div>
        </div>
        <button
          onMouseDown={handleMouseDown}
          onClick={handleNext}
          style={{
            position: 'absolute',
            top: `${position.y}%`,
            left: `${position.x}%`,
            transform: 'translate(-50%, -50%)',
            fontSize: '5rem',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: 'all 0.3s',
            textShadow: isLastSlide 
              ? '0 0 10px rgba(255,255,0,0.7), 0 0 20px rgba(255,255,0,0.5)' 
              : '0 0 8px rgba(255,255,255,0.5), 0 0 16px rgba(255,255,255,0.3)',
            filter: isLastSlide
              ? 'drop-shadow(0 0 15px rgba(255,255,0,0.5))'
              : 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
          }}
          aria-label="Next"
        >
          ⦿
        </button>
      </div>
      <div style={{
        width: '100%',
        overflowX: 'auto',
        padding: '1rem 0',
        borderTop: '1px solid #1F2937'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 0.5rem',
          minWidth: 'max-content'
        }}>
          {texts.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(index)}
              style={{
                margin: '0 0.25rem',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.375rem',
                transition: 'all 0.3s',
                fontSize: '0.875rem',
                backgroundColor: currentIndex === index ? '#374151' : 'transparent',
                color: currentIndex === index ? 'white' : '#6B7280',
                fontWeight: currentIndex === index ? 'bold' : 'normal',
                border: 'none',
                cursor: 'pointer'
              }}
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