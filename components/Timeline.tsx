const Timeline = () => {
  const timelineEvents = [
    { year: '2010', title: 'Founded', description: 'PixelForge was established as a boutique design studio.' },
    { year: '2015', title: 'Expansion', description: 'Grew to 50+ team members and opened international offices.' },
    { year: '2018', title: 'Award Winning', description: 'Received first Webby Award for innovative campaigns.' },
    { year: '2022', title: 'Digital Transformation', description: 'Launched AI-powered marketing tools for clients.' },
    { year: '2024', title: 'Future Ready', description: 'Committed to sustainable and inclusive digital practices.' },
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-5/12 p-4 ${index % 2 === 0 ? 'bg-white rounded-r-lg shadow-lg' : 'bg-white rounded-l-lg shadow-lg'}`}>
              <div className="flex items-center mb-2">
                <span className="text-blue-600 font-bold text-lg">{event.year}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
