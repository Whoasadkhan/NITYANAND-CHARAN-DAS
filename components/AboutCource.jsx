import React from 'react'
import data from "../public/data";

const AboutCource = () => {

    const {course } = data;
  return (
    <section className="flex flex-col md:flex-row gap-10">
    <div className="max-w-screen-sm p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">About the Course</h2>
      <p className="max-w-screen-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        alias qui temporibus atque fuga? Natus libero ullam amet sint
        accusantium similique veniam eveniet, provident corporis odio
        dolorem consequuntur vel. Quia? Sequi, sint. Veritatis id incidunt
        pariatur. Exercitationem, rerum saepe iste adipisci ut ducimus
        cupiditate voluptates repellat velit, vel, doloribus quasi
        deleniti quae ullam obcaecati sint totam? Distinctio magnam
        consequuntur perferendis! Rerum eveniet maxime, distinctio,
        consectetur earum aliquid possimus ratione tempore vitae quasi
        impedit obcaecati voluptatum? Magni, et eaque! Eveniet illum, at
        doloremque eum cum architecto quo eos! Minus, esse fugiat?
      </p>

      <h2 className="text-2xl font-bold my-4">
        What to expect from this course
      </h2>
      <ul className="list-disc list-inside leading-8">
        <li>Learn to manage your relationships</li>
        <li>Better communication</li>
        <li>Time management</li>
        <li>Forgiveness</li>
      </ul>

      <h2 className="text-2xl font-bold my-4">Key Topics Covered</h2>
      <ul className="list-disc list-inside leading-6">
        <li>
          <span className="font-bold">
            10 written and audio sessions
          </span>
          guiding you in decoding the language of numbers so that you can
          easily receive their insights and messages.
        </li>
        <li>
          <span className="font-bold">
            Intuitive exercises and homework
          </span>
          walk you through the energies and values of numbers and number
          sequences so you can become your own authority.
        </li>
        <li>
          <span className="font-bold">
            Handy reference to numerical meanings,
          </span>
          so you can uncover your soul's gifts, challenges, lessons, and
          purpose – and receive spiritual guidance along your path.
        </li>
        <li>
          <span className="font-bold">
            Expert techniques for manifestation offer
          </span>
          simple ways to use numbers to co-create with the universe.
        </li>
      </ul>
    </div>

    <div className="bg-[#f4e8ff] relative p-8 md:top-[-2rem] h-min w-full md:w-auto lg:w-[400px]">
      <div className="mb-2">
        <p className="text-lg mb-1">Course Fees</p>
        <h4 className="text-4xl font-semibold">&#8377;{course.fee.amount}</h4>
      </div>
      <div>
        <p className="font-bold">What's included</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>On-demand videos</li>
          <li>Live Q&A sessions with nityanand charandas</li>
          <li>WhatsApp community access</li>
        </ul>
        <button className="text-center mt-5 w-full rounded-full text-white p-4 bg-[#7230e0] font-extrabold mt-3">
          Register Today
        </button>
      </div>
    </div>
  </section>
  )
}

export default AboutCource