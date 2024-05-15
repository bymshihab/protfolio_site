import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Project = (project) => {
  const { id, name, features, github_link, technologies, description } =
    project.project;
  console.log(id, name, project.project);
  return (
    <div>
      <div className=" mt-5 card lg:card-side bg-base-100 border border-gray-200 shadow-lg space-y-2 m-2 hover:ease-in-out ">
        <div className="card-body">
          <h2 className="card-title">{name} </h2>
          <p className="w-full text-justify">{description}</p>
          <p className="">
            <span className="font-bold">Fetaures: </span>
            {features}
          </p>
          <p className="font-bold">
            <span className="font-bold">Technologies: </span>
            {technologies.join(", ")}
          </p>
          {github_link && (
            <p>
              <Link
                className="mt-2 flex w-28 border items-center p-1 hover:bg-gray-100 hover:underline"
                to={github_link}
              >
                <p>GitHub Link</p>
                <span className="">
                  <GoArrowUpRight />
                </span>
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
