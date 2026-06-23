import "./Section-three.css";
import { users } from "../Mock";

function SectionThree() {
  return (
    <section className="sectionThree">
      <div className="stores">
        <h2>Stories from our users</h2>
        <blockquote>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </blockquote>
      </div>

      <div className="users">
        {users.map((user, index) => {
          return (
            <div className="user-card" key={index}>
              <img  loading='lazy' src={user.image} alt={user.image} />
              <div className="profileInfo">
                <img loading='lazy' src={user.userImg} alt={user.userImg} />
                <div className="">
                  <h5>{user.title}</h5>
                  <p>{user.userName}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionThree;
