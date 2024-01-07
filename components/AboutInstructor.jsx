import React from 'react'
import SocialMediaIcons from "@/components/SocialMediaIcons";

const AboutInstructor = () => {
  return (
    <section className="mx-5">
          <h3 className="text-2xl font-bold mb-5">About the Instructor</h3>
          <div className="flex flex-col md:flex-row items-center">
            <div className=" md:w-[700px]  md:h-[150px] overflow-hidden mb-4 md:mr-4">
              <img
                src="img2.jpeg"
                alt="Instructor"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="flex  gap-4 px-4">
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                modi eaque pariatur corporis voluptatum eveniet consequuntur
                atque autem nostrum vero exercitationem corrupti ab voluptates
                culpa fugit, quos obcaecati, porro totam.
              </p>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                modi eaque pariatur corporis voluptatum eveniet consequuntur
                atque autem nostrum vero exercitationem corrupti ab voluptates
                culpa fugit, quos obcaecati, porro totam.
              </p>
            </div>
          </div>
          <SocialMediaIcons/>
        </section>
  )
}

export default AboutInstructor