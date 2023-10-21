import PropTypes from "prop-types";
import { useState } from "react";

const Teams = () => {
  const [members, setMembers] = useState([]);
  fetch("/teams.json")
    .then((res) => res.json())
    .then((data) => setMembers(data));
  return (
      <div>
        <h2 className="text-2xl md:text-5xl font-bold text-center pt-10">Meet Our Team</h2>
    <div className="p-6 py-20 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {members?.map((member) => (
        <div key={member.id}>
          <img
            src={member.image}
            className="h-60 block right-0 left-0 mx-auto border-[5px] border-white hover:border-gray-300 rounded-3xl"
          />
          <h2 className="text-xl font-semibold text-center hover:text-gray-600 ">
            {member.name}
          </h2>
          <p className="text-lg text-center">{member.designation}</p>{" "}
        </div>
      ))}
    </div>
      </div>
  );
};
Teams.propTypes = {
  member: PropTypes.object,
};
export default Teams;
