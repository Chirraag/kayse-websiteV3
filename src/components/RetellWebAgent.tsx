import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Phone, PhoneOff, MessageCircle } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";

interface RetellWebAgentProps {
  onCallStart?: () => void;
  onCallEnd?: () => void;
}

const RetellWebAgent: React.FC<RetellWebAgentProps> = ({
  onCallStart,
  onCallEnd,
}) => {
  const [isRinging, setIsRinging] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [callStatus, setCallStatus] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const retellClientRef = useRef<RetellWebClient | null>(null);

  // Setup audio and retell client
  useEffect(() => {
    retellClientRef.current = new RetellWebClient();
    audioRef.current = new Audio("/calling.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (retellClientRef.current) {
        retellClientRef.current.stopCall();
      }
    };
  }, []);

  const startCall = async () => {
    if (isCallActive) {
      endCall();
      return;
    }

    try {
      setIsRinging(true);
      setCallStatus("Initiating call...");

      if (audioRef.current) {
        audioRef.current.play();
      }
      onCallStart?.();

      const response = await fetch(
        "https://kayse-backend.replit.app/api/create-web-call",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        },
      );

      const webCallResponse = await response.json();

      if (!webCallResponse?.data?.access_token) {
        throw new Error("Failed to get access token");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      setIsRinging(false);
      setIsCallActive(true);
      setCallStatus("Call connected");

      await retellClientRef.current?.startCall({
        accessToken: webCallResponse.data.access_token,
        sampleRate: 24000,
        captureDeviceId: "default",
        playbackDeviceId: "default",
        emitRawAudioSamples: false,
      });
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

  const endCall = () => {
    if (retellClientRef.current) {
      retellClientRef.current.stopCall();
    }
    setIsCallActive(false);
    setCallStatus("");
    onCallEnd?.();
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Card container */}
      <motion.div
        className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                 bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                 border border-white/10
                 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                 group transform-gpu transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-[60px] opacity-40"></div>

        {/* Header */}
        <div className="relative z-10 mb-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
            <span>Live Demo</span>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Experience Our Voice AI
          </h3>
          <p className="text-white/70 text-sm">
            Try a live conversation with our AI assistant to see how it can help
            your clients
          </p>
        </div>

        {/* Call button */}
        <div className="relative z-10 flex flex-col items-center justify-center mb-8">
          <motion.button
            onClick={startCall}
            className={`w-20 h-20 rounded-full flex items-center justify-center
                      ${
                        isCallActive
                          ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
                          : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400"
                      }
                      shadow-lg ${isCallActive ? "shadow-red-500/20" : "shadow-blue-500/20"}
                      hover:shadow-xl ${isCallActive ? "hover:shadow-red-500/30" : "hover:shadow-blue-500/30"}
                      transform hover:scale-105 transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isRinging ? (
                <motion.div
                  key="ringing"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [-5, 5] }}
                  exit={{ scale: 0 }}
                  transition={{
                    scale: { duration: 0.2 },
                    rotate: {
                      repeat: Infinity,
                      duration: 0.2,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
              ) : isCallActive ? (
                <motion.div
                  key="active"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <PhoneOff className="w-8 h-8 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="inactive"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Mic className="w-8 h-8 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Call status */}
          <AnimatePresence>
            {(isRinging || isCallActive) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="mt-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${isCallActive ? "bg-green-500 animate-pulse" : "bg-blue-500 animate-pulse"}`}
                  ></div>
                  <span className="text-white text-sm font-medium">
                    {isRinging ? "Connecting..." : "In Call"}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Features */}
        <div className="relative z-10 grid grid-cols-2 gap-3 mb-6">
          {[
            {
              icon: <MessageCircle className="w-4 h-4" />,
              label: "Human-like voice",
            },
            { icon: <Phone className="w-4 h-4" />, label: "Low latency" },
            { icon: <Mic className="w-4 h-4" />, label: "Legal terminology" },
            {
              icon: <MessageCircle className="w-4 h-4" />,
              label: "Empathetic responses",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                {feature.icon}
              </div>
              <span className="text-white/80 text-xs">{feature.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <div className="relative z-10 text-center">
          <p className="text-white/60 text-sm">
            {isCallActive
              ? "Speak naturally to our AI assistant about legal client retention"
              : "Click the microphone button to start a conversation"}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RetellWebAgent;
