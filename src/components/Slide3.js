import React from "react";
import { Link } from "react-router-dom";

const Slide3 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly p-6 lg:p-10 items-center lg:items-start">
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold mb-4">
            Why Gruhapandit Tuitions is Perfect for Students
          </h2>
          <ul className="list-disc pl-6 sm:pl-10 space-y-2 text-base sm:text-lg leading-relaxed text-gray-800 mt-4">
            <li>
              <strong>Interactive and Engaging Classes: </strong>Whether you opt
              for online or offline tuitions, our classes are designed to keep
              you engaged and involved, ensuring better retention of concepts.
            </li>
            <li>
              <strong>Affordable Education: </strong>We believe that everyone
              deserves a quality education. Our tuition fees are affordable
              without compromising on quality education. move forward.
            </li>
          </ul>
          <div>
            <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold mb-4">
              How it Works
            </h2>

            <ol className="list-decimal pl-6 sm:pl-10 space-y-2 text-base sm:text-lg leading-relaxed text-gray-800 mt-4">
              <li>
                <strong>Register with Gruhapandit Tuitions: </strong>
                Sign up for online or offline tuitions based on your
                preferences.
              </li>
              <li>
                <strong>Choose Your Subjects: </strong>
                Select the subjects where you need extra support, whether it’s Mathematics,
                Science, English, and more.
              </li>
              <li>
                <strong>Start Learning: </strong>
                Get started with our expert tutors who will guide you through your coursework, exam preparation, and concept-building.
              </li>
              <li>
                <strong>Success Stories: </strong>
                Students have already achieved their academic goals with Gruhapandit Tuitions. From improving grades to excelling in exams, we’re proud 
                to be a part of their success journey. Join Gruhapandit Tuitions today and take the first step toward academic excellence!
              </li>
            
            </ol>
          </div>

          <Link to="/register/student">
            <button className="apply-btn bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 mt-6 sm:mt-8 rounded-xl font-semibold transition-colors duration-300">
              Apply Now
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 duration-300 ease-in-out"
            alt="Students learning"
          />
        </div>
      </div>
    </>
  );
};

export default Slide3;