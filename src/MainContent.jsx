





import React from "react";

const MainContent = () => {
  // Array of YouTube video links
  const videoLinks = [
    "https://www.youtube.com/embed/SqcY0GlETPk?si=Jnq8LbeRnwUhruKh",
    "https://www.youtube.com/embed/RGKi6LSPDLU?si=AlMP0hNnwTJK3pPK",
    "https://www.youtube.com/embed/zZ-VeqYPxoA?si=71bo_9hXWyNJrC_x",
    "https://www.youtube.com/embed/OGs2YsqvWDg?si=0IygZFYCYMp5tp14",
    "https://www.youtube.com/embed/hNMO3ZjLN9c?si=hN2LmF0RL7l-0aLE",
    "https://www.youtube.com/embed/kBIN2h16Rc4?si=GqB2Vg67ulWR4LG2",
    "https://www.youtube.com/embed/wTJrzGeMJPI?si=k5VjIv_zQ4BbAttn",
    "https://www.youtube.com/embed/Q3mlNjnRO8w?si=ldQToPMuxOfMzSuW",
    "https://www.youtube.com/embed/Ayy-__ghfUI?si=xhQ3VWQ7N2MKuw2k",
    "https://www.youtube.com/embed/kTW-F9KqbSs?si=gjIz0oWL096isf1V",
    "https://www.youtube.com/embed/Du16-GsdBZg?si=Gsi8zlEqtuaPLgsT",
    "https://www.youtube.com/embed/C_cHsNWjBKE?si=CD26uM_UR6U6jbE7",
    "https://www.youtube.com/embed/DOdcGwUQvJM?si=fs4PVHCxX-pm9TiH",
    "https://www.youtube.com/embed/Pj4nFvgzZCo?si=o_VjV7B0d90YKu7O",
    "https://www.youtube.com/embed/q8OleYuqntY?si=6XciaQrIUkBkQg0m",
    "https://www.youtube.com/embed/tYv44wQYePg?si=K52Pf26uLACcnY4d",
    "https://www.youtube.com/embed/_5ecgEXLoCA?si=Qlq17yqK7yaa7u28",
    "https://www.youtube.com/embed/zVBHOKJgouI?si=gQlyAWkl1UEyST2V",
    "https://www.youtube.com/embed/N3rZ6glHKTQ?si=UnqzF3Rj6W-GnMsi",
    "https://www.youtube.com/embed/N3rZ6glHKTQ?si=N9CH9yo4nWzLnMd-",
    "https://www.youtube.com/embed/2Eh1LwIse2Y?si=GY74e-LleubwXVr8",
    "https://www.youtube.com/embed/hnUS8kPutz8?si=2zH9taJ00ofuRzWf",
    "https://www.youtube.com/embed/A-IsoneWlzE?si=8t-FwpkBCfq_QMGi",       


    // Add more video links as needed
  ];

  return (
    <main className="flex-grow h-100vh-60px p-6 bg-gray-700 overflow-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">Welcome to the Landing Page</h1>

      <div className="relative w-full flex flex-wrap justify-start gap-3">
        {/* Loop through videoLinks and create containers */}
        {videoLinks.map((link, index) => (
          <div key={index} className="relative h-52 w-[30%] bg-gray-500 ml-5 rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={link}
              title={`YouTube video player ${index + 1}`}
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
