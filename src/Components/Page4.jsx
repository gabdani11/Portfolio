import React from 'react';


const Page4 = () => {
  const StarIcon = () => (
    <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  return (
    <div id='project' className="min-h-screen text-white">
      {/* Projects Section */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Projects Title */}
          <h1 className="text-7xl font-inria italic text-center mb-20 text-[#f9f9f9]">Projects</h1>
          
          {/* Projects List */}
          <div className="space-y-12">
            {/* Health Monitor Project */}
            <div className="flex items-start justify-between border-b border-white/20 pb-8">
              <div className="flex-1">
                <h2 className="text-3xl font-inria italic mb-4 text-white/90">Health Monitor</h2>
                <p className="text-white/70 font-inria text-lg leading-relaxed max-w-4xl">
                  Track your heart rate and optimize your food intake to elevate your health and productivity—it's time to take control!
                </p>
              </div>
              <div className="ml-8 flex-shrink-0">
                <StarIcon />
              </div>
            </div>

            {/* Lorem ipsum Project 1 */}
            <div className="flex items-start justify-between border-b border-white/20 pb-8">
              <div className="flex-1">
                <h2 className="text-3xl font-inria italic mb-4 text-white/90">Lorem ipsum</h2>
                <p className="text-white/70 font-inria text-lg leading-relaxed max-w-4xl">
                  Lorem ipsum fermentum commodo sit nec sit aliquet arcu maecenas mattis amet nec duis massa pharetra adipiscing mauris est euismod.
                </p>
              </div>
              <div className="ml-8 flex-shrink-0">
                <StarIcon />
              </div>
            </div>

            {/* Lorem ipsum Project 2 */}
            <div className="flex items-start justify-between border-b border-white/20 pb-8">
              <div className="flex-1">
                <h2 className="text-3xl font-inria italic mb-4 text-white/90">Lorem ipsum</h2>
                <p className="text-white/70 font-inriatext-lg leading-relaxed max-w-4xl">
                  Lorem ipsum lacus sed risus maecenas potenti est sed ac turpis ultricies at vitae eras nullam est vitae.
                </p>
              </div>
              <div className="ml-8 flex-shrink-0">
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Page4;