import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import './globals.css';

export default function page() {
  return (
    <div>
      <div className="main relative">
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          src="https://www.figma.com/file/kTmIZ07jN9UhktVbu2Ngsu/image/f856859e4f95b73645f94f1568e0946aa74c575b"
        />
        
        {/* White Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80 z-10"></div>

        {/* Content */}
        <div className="relative z-20">
          <Navbar />
          <Header />
        </div>
      </div>
      <Section/>
  

    
    </div>
  );
}
