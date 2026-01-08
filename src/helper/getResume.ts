import { withPrefix } from "gatsby";
import { RESUME_FILE } from "../constants/meta";

const getResume = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault();
  window.open(withPrefix(`/${RESUME_FILE}`), "_blank");
};

export default getResume;
