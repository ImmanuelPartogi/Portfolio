import { useState } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "60rem",
    width: "90%",
    zIndex: 1001,
  },
  overlay: {
    padding: "2rem",
    zIndex: 1000,
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function openModal(project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <section className="bg-bg_light_primary" id="projects">
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 w-full lg:w-3/4 max-w-4xl drop-shadow-primary"
          >
            {/* Render images from the selected project */}
            {selectedProject?.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h6 className="text-center mt-4">{selectedProject?.title}</h6>
        <p className="font-Poppins text-sm leading-6 text-gray-800 bg-gray-100 rounded-md shadow-sm mt-2">
          {selectedProject?.description}
        </p>
        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* Content */}
      <div className="md:container px-5 pt-14 flex flex-col md:min-h-screen">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5 justify-center mt-8">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 w-full lg:w-3/4 max-w-4xl drop-shadow-primary"
          >
            {Projects.project_content.map((project, index) => (
              <SwiperSlide
                key={index}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl"
                /><br/>
                <div className="flex flex-col gap-1 mt-2 text-center">
                  <h5 className="font-bold font-Poppins">{project.title}</h5>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => openModal(project)}
                  ><br/>
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
