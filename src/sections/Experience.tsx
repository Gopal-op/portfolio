import { workExperiences } from "../constants";

export const Experience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h3 className="head-text">My work experience</h3>

        <div className="work-content mt-12">
          <div className="px-2.5 py-5 sm:px-5 sm:py-10">
            {workExperiences.map(({ duration, icon, id, name, pos, title }) => (
              <div key={id} className="work-content_container group">
                <div className="flex h-full flex-col items-center justify-start py-2">
                  <div className="work-content_logo">
                    <img src={icon} alt={name} className="size-full" />
                  </div>

                  <div className="work-content_bar" />
                </div>

                <div className="px-2.5 py-5 sm:p-5">
                  <p className="font-bold text-white-800">{name}</p>

                  <p className="mb-5 text-sm">
                    {pos} &bull; {duration}
                  </p>

                  <div className="transition duration-500 ease-in-out group-hover:text-white">
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
