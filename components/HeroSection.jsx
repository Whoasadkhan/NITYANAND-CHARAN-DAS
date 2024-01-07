import React from 'react'
import data from "../public/data";


const HeroSection = () => {
    const {instructor, course} = data;

  return (
    <section className="relative overflow-hidden h-[75vh]">
    <img
      src="img.jpg" 
      alt="Full Width Image"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute bottom-0 left-0 w-full">
      <div className="bg-gradient-to-b from-transparent to-black opacity-90 p-5 md:p-10 lg:p-20">
        <p className="font-semibold text-white mb-2 opacity-100">
          {instructor.name}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-100 max-w-screen-lg">
          {course.title}
        </h1>
      </div>
    </div>
  </section>
  )
}

export default HeroSection