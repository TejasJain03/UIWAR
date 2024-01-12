export default function About() {
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2>About Us</h2>
          <p>Some information about your company or team.</p>
    
          {/* Embedded Video */}
          <video width="640" height="360" muted autoPlay  className="mt-4">
            <source src="src/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
}