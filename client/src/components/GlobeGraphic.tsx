export default function GlobeGraphic() {
  return (
    <div className="globe-gradient rounded-full aspect-square w-full max-w-lg mx-auto overflow-hidden">
      <div className="w-full h-full opacity-70">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <circle cx="250" cy="250" r="240" fill="url(#dot-pattern)" />
          <path 
            d="M100,250 C100,180 150,150 250,150 C350,150 400,180 400,250 C400,320 350,350 250,350 C150,350 100,320 100,250 Z" 
            fill="none" 
            stroke="white" 
            strokeWidth="1" 
            strokeDasharray="5,5" 
          />
          <path 
            d="M250,100 C320,100 350,150 350,250 C350,350 320,400 250,400 C180,400 150,350 150,250 C150,150 180,100 250,100 Z" 
            fill="none" 
            stroke="white" 
            strokeWidth="1" 
            strokeDasharray="5,5" 
          />
        </svg>
      </div>
    </div>
  );
}
