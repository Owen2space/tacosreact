'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Apple-style smooth easing
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const capabilities = [
  {
    title: 'Real-Time Intelligence',
    description: 'Live HD data feed with minimal latency for immediate operational awareness',
  },
  {
    title: 'Thermal Imaging',
    description: 'Advanced thermal sensors for night operations and heat signature detection',
  },
  {
    title: 'GPS Precision',
    description: 'Centimeter-level accuracy for precise geospatial mapping and navigation',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless data synchronization and analysis through secure cloud infrastructure',
  },
];

// Total number of frames - skip dark frames at start and end
const FRAME_START = 10; // Skip first 10 dark frames
const FRAME_END = 72; // Skip last 10 dark frames
const FRAME_STEP = 2; // Load every 2nd frame for better performance (31 frames instead of 62)
const FRAME_COUNT = Math.floor((FRAME_END - FRAME_START) / FRAME_STEP);

// Dynamic text content based on frame progress
const frameContent = [
  {
    range: [0, 0.2],
    title: 'AI-Powered Intelligence',
    subtitle: 'Advanced computer vision and autonomous systems',
  },
  {
    range: [0.2, 0.4],
    title: 'Precision Navigation',
    subtitle: 'GPS-guided flight with centimeter-level accuracy',
  },
  {
    range: [0.4, 0.6],
    title: 'Real-Time Data Feed',
    subtitle: 'Live HD streaming with minimal latency',
  },
  {
    range: [0.6, 0.8],
    title: 'Thermal Imaging',
    subtitle: 'Advanced sensors for night operations',
  },
  {
    range: [0.8, 1],
    title: 'Mission-Ready',
    subtitle: 'Fully operational and ready for deployment',
  },
];

export default function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingError, setLoadingError] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [currentContent, setCurrentContent] = useState(frameContent[0]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Load only the good frames (skip dark ones) - load every 2nd frame for performance
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let errorCount = 0;

    for (let i = FRAME_START; i < FRAME_END; i += FRAME_STEP) {
      const img = new window.Image();
      const frameNumber = i.toString().padStart(3, '0');
      // URL encode the path with spaces
      img.src = `/assets/sqeantial%20files/A_cinematic_drone_202601252333_qtjih%20(1)_${frameNumber}.webp`;
      
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      
      img.onerror = () => {
        errorCount++;
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        
        // If too many errors, mark as failed
        if (errorCount > FRAME_COUNT * 0.5) {
          setLoadingError(true);
        }
        
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      
      const index = Math.floor((i - FRAME_START) / FRAME_STEP);
      loadedImages[index] = img;
    }
    
    setImages(loadedImages);
  }, []);

  // Update canvas based on scroll with smoother animation
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Smooth easing function
      const easedProgress = latest < 0.5 
        ? 4 * latest * latest * latest
        : 1 - Math.pow(-2 * latest + 2, 3) / 2;
      
      const frameIndex = Math.min(
        Math.floor(easedProgress * FRAME_COUNT),
        FRAME_COUNT - 1
      );
      
      setCurrentFrame(frameIndex);
      
      // Update content based on progress
      const content = frameContent.find(
        (item) => easedProgress >= item.range[0] && easedProgress < item.range[1]
      ) || frameContent[frameContent.length - 1];
      
      setCurrentContent(content);
      
      const img = images[frameIndex];
      if (img && img.complete) {
        const container = canvas.parentElement;
        if (container) {
          const dpr = window.devicePixelRatio || 1;
          canvas.width = container.clientWidth * dpr;
          canvas.height = container.clientHeight * dpr;
          canvas.style.width = `${container.clientWidth}px`;
          canvas.style.height = `${container.clientHeight}px`;
          
          context.scale(dpr, dpr);
          
          // Calculate to fit within container (not fill)
          const containerAspect = container.clientWidth / container.clientHeight;
          const imageAspect = img.width / img.height;
          
          let drawWidth, drawHeight, offsetX, offsetY;
          
          if (containerAspect > imageAspect) {
            // Container is wider - fit to height
            drawHeight = container.clientHeight * 0.7; // 70% of container height
            drawWidth = drawHeight * imageAspect;
          } else {
            // Container is taller - fit to width
            drawWidth = container.clientWidth * 0.8; // 80% of container width
            drawHeight = drawWidth / imageAspect;
          }
          
          offsetX = (container.clientWidth - drawWidth) / 2;
          offsetY = (container.clientHeight - drawHeight) / 2;
          
          context.clearRect(0, 0, container.clientWidth, container.clientHeight);
          
          // No cropping - show full image without watermark
          context.drawImage(
            img,
            0, 0, img.width, img.height,
            offsetX, offsetY, drawWidth, drawHeight
          );
        }
      }
    });

    // Draw first frame initially
    const firstImg = images[0];
    if (firstImg && firstImg.complete) {
      const container = canvas.parentElement;
      if (container) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = container.clientWidth * dpr;
        canvas.height = container.clientHeight * dpr;
        canvas.style.width = `${container.clientWidth}px`;
        canvas.style.height = `${container.clientHeight}px`;
        
        context.scale(dpr, dpr);
        
        const containerAspect = container.clientWidth / container.clientHeight;
        const imageAspect = firstImg.width / firstImg.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (containerAspect > imageAspect) {
          drawHeight = container.clientHeight * 0.7;
          drawWidth = drawHeight * imageAspect;
        } else {
          drawWidth = container.clientWidth * 0.8;
          drawHeight = drawWidth / imageAspect;
        }
        
        offsetX = (container.clientWidth - drawWidth) / 2;
        offsetY = (container.clientHeight - drawHeight) / 2;
        
        // No cropping - show full image
        context.drawImage(
          firstImg,
          0, 0, firstImg.width, firstImg.height,
          offsetX, offsetY, drawWidth, drawHeight
        );
      }
    }

    return () => unsubscribe();
  }, [scrollYProgress, images, imagesLoaded]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [1, 1, 1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95, 1], [0, 0, 1, 1]);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-[#0a0a0a] to-black" style={{ height: '400vh' }}>
      {/* Sticky container for the animation */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Top capability cards - fade in/out based on scroll */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-20 pt-20 sm:pt-24 pb-4 sm:pb-6 bg-gradient-to-b from-black/80 to-transparent"
        >
          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
                >
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">{capability.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 line-clamp-2">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Animation container */}
        <div className="relative flex-1 flex items-center justify-center bg-black">
          <div className="absolute inset-0 flex items-center justify-center">
            {!imagesLoaded && !loadingError && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#2d5a8a] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white text-xs sm:text-sm px-4 mb-2">Loading transformation...</p>
                  <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
                    <div 
                      className="h-full bg-[#2d5a8a] transition-all duration-300"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                  <p className="text-white/60 text-xs mt-2">{loadingProgress}%</p>
                </div>
              </div>
            )}

            {loadingError && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
                <div className="text-center px-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 border-2 border-red-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm mb-2">Unable to load animation</p>
                  <p className="text-gray-400 text-xs">Scroll down to continue</p>
                </div>
              </div>
            )}
            
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ opacity: imagesLoaded && !loadingError ? 1 : 0, transition: 'opacity 0.5s' }}
            />
          </div>

          {/* Left Side Text - NO blur effect, positioned away from drone */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute left-4 sm:left-8 md:left-12 bottom-12 sm:bottom-16 md:bottom-20 pointer-events-none z-20"
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md">
              <div className="bg-black/70 p-4 sm:p-5 md:p-6 rounded-xl border border-white/20">
                <motion.h3
                  key={currentContent.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2"
                >
                  {currentContent.title}
                </motion.h3>
                <motion.p
                  key={currentContent.subtitle}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-300 text-xs sm:text-sm"
                >
                  {currentContent.subtitle}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content after animation - with proper spacing and fade in */}
      <motion.div 
        style={{ opacity: contentOpacity }}
        className="relative bg-[#f8f9fa]"
      >
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-[#2d5a8a] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Operational Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-4 sm:mb-6">
              Airborne Intelligence, <span className="gradient-text-primary">Delivered</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the precision of professional aerial operations
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#2d5a8a]/30 transition-all duration-300 card-hover"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#1a1a2e] mb-2">{capability.title}</h3>
                <p className="text-gray-500 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { value: '500+', label: 'Hectares Surveyed' },
              { value: '200+', label: 'Flight Hours' },
              { value: '98%', label: 'Mission Success' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: smoothEase }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
