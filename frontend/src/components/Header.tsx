import { HiOutlineBars3 } from "react-icons/hi2";

export function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div>
          <HiOutlineBars3 />
        </div>
        <div>Flyfairly</div>
      </div>
      <div>
        <button>INR</button>
        <button>Language</button>
      </div>
    </div>
  );
}
