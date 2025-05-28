import React, { useState, useRef, useEffect } from "react";
import { Mic, Phone, PhoneOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RetellAgent: React.FC = () => {
  const [isRinging, setIsRinging] = useState<boolean>(false);
  const [isCallActive, setIsCallActive] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>("");
  const [displayText, setDisplayText] = useState<string[]>(["", "", "", ""]);
  
  // Reversed text sets order
  const textSets = [
    ["Try Kayse AI", "instantly.", "Just enter", "your number."],
    ["Scale", "exponentially", "without", "adding staff."]
  ];
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Animation state ref
  const animationRef = useRef({
    currentLine: 0,
    currentChar: 0, 
    isDeleting: false,
    textSetIndex: 0,
    timeoutId: null as NodeJS.Timeout | null
  });

  // Setup audio
  useEffect(() => {
    audioRef.current = new Audio("/calling.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);
  
  // Add custom animation
  useEffect(() => {
    // Create a style element for the custom animation
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes shimmer {
        0% {
          transform: translateX(-150%) skewX(-12deg);
        }
        100% {
          transform: translateX(150%) skewX(-12deg);
        }
      }
      .animate-shimmer {
        animation: shimmer 2.5s infinite;
      }
    `;
    document.head.appendChild(styleEl);

    // Cleanup
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Text animation effect
  useEffect(() => {
    const animation = animationRef.current;
    
    const animateText = () => {
      try {
        const currentTextSet = textSets[animation.textSetIndex];
        
        if (!animation.isDeleting) {
          // Typing mode - faster speed
          if (animation.currentLine < currentTextSet.length) {
            const line = currentTextSet[animation.currentLine];
            
            if (animation.currentChar <= line.length) {
              // Type character by character
              setDisplayText(prev => {
                const newText = [...prev];
                newText[animation.currentLine] = line.substring(0, animation.currentChar);
                return newText;
              });
              
              animation.currentChar++;
              animation.timeoutId = setTimeout(animateText, 50); // Match deletion speed
            } else {
              // Move to next line
              animation.currentLine++;
              animation.currentChar = 0;
              animation.timeoutId = setTimeout(animateText, 150); // Faster line change
            }
          } else {
            // All lines typed - pause before deleting
            animation.timeoutId = setTimeout(() => {
              animation.isDeleting = true;
              animation.currentLine = currentTextSet.length - 1;
              if (animation.currentLine >= 0 && animation.currentLine < currentTextSet.length) {
                animation.currentChar = currentTextSet[animation.currentLine].length;
              } else {
                animation.currentChar = 0;
              }
              animateText();
            }, 1200); // Shorter pause at completion
          }
        } else {
          // Deleting mode - character by character with faster speed
          if (animation.currentLine >= 0) {
            if (animation.currentChar > 0) {
              // Delete character by character from current line
              animation.currentChar--;
              
              setDisplayText(prev => {
                const newText = [...prev];
                const line = currentTextSet[animation.currentLine];
                newText[animation.currentLine] = line.substring(0, animation.currentChar);
                return newText;
              });
              
              animation.timeoutId = setTimeout(animateText, 50); // Faster deletion
            } else {
              // Current line is empty, move to previous line
              animation.currentLine--;
              
              if (animation.currentLine >= 0) {
                // Set character index to end of previous line
                animation.currentChar = currentTextSet[animation.currentLine].length;
                animation.timeoutId = setTimeout(animateText, 150); // Faster line transition
              } else {
                // All lines deleted - switch to next text set
                animation.timeoutId = setTimeout(() => {
                  animation.isDeleting = false;
                  animation.currentLine = 0;
                  animation.currentChar = 0;
                  animation.textSetIndex = (animation.textSetIndex + 1) % textSets.length;
                  
                  // Clear display text
                  setDisplayText(["", "", "", ""]);
                  
                  animation.timeoutId = setTimeout(animateText, 700); // Faster reset
                }, 300); // Faster transition
              }
            }
          } else {
            // Edge case - reset everything
            animation.isDeleting = false;
            animation.currentLine = 0;
            animation.currentChar = 0;
            animation.textSetIndex = (animation.textSetIndex + 1) % textSets.length;
            setDisplayText(["", "", "", ""]);
            animation.timeoutId = setTimeout(animateText, 300); // Faster recovery
          }
        }
      } catch (error) {
        console.error("Animation error:", error);
        // Recover from error
        animation.currentLine = 0;
        animation.currentChar = 0;
        animation.isDeleting = false;
        animation.textSetIndex = 0;
        setDisplayText(["", "", "", ""]);
        animation.timeoutId = setTimeout(animateText, 500);
      }
    };
    
    // Start animation
    animateText();
    
    // Cleanup
    return () => {
      if (animation.timeoutId) {
        clearTimeout(animation.timeoutId);
      }
    };
  }, []);

  const startCall = async () => {
    // If call is active, don't allow starting another call
    if (isCallActive) {
      return;
    }

    // Validate phone number - must have at least 10 digits
    const digits = phoneNumber.replace(/\D/g, '');
    if (digits.length < 10) {
      alert("Please enter your phone number");
      return;
    }

    try {
      setIsRinging(true);
      setCallStatus("Initiating call...");
      
      if (audioRef.current) {
        audioRef.current.play();
      }

      const response = await fetch(
        "https://kayse-backend.replit.app/api/create-phone-call",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber }),
        },
      );

      const callResponse = await response.json();

      if (callResponse?.success) {
        setCallStatus("Call connected!");
        setIsCallActive(true);
      } else {
        throw new Error("Failed to initiate call");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      setIsRinging(false);
    } catch (error) {
      console.error("Error starting call:", error);
      setIsRinging(false);
      setIsCallActive(false);
      setCallStatus("");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center w-[375px]">
      <div className="relative">
        <div className="relative">
          <img 
            src="/kayse-iphone2.png" 
            alt="Phone Interface" 
            className="w-full h-auto select-none"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              console.error('Failed to load phone image');
            }}
          />
        </div>

        {/* Input and button container moved even higher */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[90%] flex flex-col items-center">
          {/* Input and button wrapped in a fixed container */}
          <div className="flex flex-col items-center w-full gap-3">
            <div className="relative w-[75%]">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black font-medium">+</div>
              <input 
                type="tel"
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  // Only allow numbers and common phone number characters
                  const value = e.target.value.replace(/[^\d\-() ]/g, '');
                  setPhoneNumber(value);
                }}
                placeholder="1 (555) 555-5555"
                className="w-full h-[56px] pl-8 pr-4 text-base rounded-[16px] bg-[#E5E7EB] 
                         border border-[#E5E7EB] text-black placeholder-gray-500
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                         transition-all duration-300 font-medium"
                disabled={isCallActive || isRinging}
              />
            </div>
            
            <motion.button
              onClick={startCall}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(8, 47, 73, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                w-[75%] h-[56px] px-6 rounded-[16px] font-semibold text-base
                transition-all duration-300 backdrop-blur-md border border-white/10
                relative overflow-hidden group
                ${isRinging
                  ? 'bg-[#0F172A]/90 text-white shadow-lg shadow-[#0F172A]/30 animate-pulse'
                  : 'bg-[#0F172A] text-white shadow-lg shadow-[#0F172A]/30'
                }
              `}
            >
              {/* Glassmorphism animated highlight */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <AnimatePresence mode="wait">
                {isRinging ? (
                  <motion.div
                    key="ringing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 z-10 relative"
                  >
                    {callStatus || "Connecting..."}
                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 z-10 relative"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Let's Talk</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        
        {/* Text container with darker gradient, positioned more right */}
        <div className="absolute bottom-[10%] left-[55%] -translate-x-1/2 text-left min-h-[300px] w-[300px]">
          <div className="flex flex-col items-start space-y-1">
            {displayText.map((line, index) => (
              <h3 
                key={index}
                className="text-[40px] font-semibold font-manrope leading-[1.2] min-h-[50px] bg-gradient-to-r from-[#082f49] to-[#0c4a6e] bg-clip-text text-transparent"
              >
                {line}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetellAgent;