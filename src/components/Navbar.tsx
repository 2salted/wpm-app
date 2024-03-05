import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex justify-between flex-row">
      <div className="text-neutral-500 text-3xl font-bold font-robotoRegular">
        Play Online
      </div>
      <div className="flex flex-row">
        <div className="pr-8">
          <div className="text-neutral-500 hover:text-neutral-300 text-base font-semibold font-robotoRegular">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="text-neutral-500 hover:text-neutral-300 text-base font-semibold font-robotoRegular">
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
    </div>
  );
}
