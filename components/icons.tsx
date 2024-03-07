import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faEarthAsia,
  faGear,
  faHome,
  faMagnifyingGlass,
  faRectangleVerticalHistory,
} from "@fortawesome/pro-thin-svg-icons";

const createFAIcon = (icon: FontAwesomeIconProps["icon"]) => {
  return function FAIcon(props: any) {
    return <FontAwesomeIcon icon={icon} {...props} />;
  };
};

export const Icons = {
  magnifyingGlass: createFAIcon(faMagnifyingGlass),
  verticalStack: createFAIcon(faRectangleVerticalHistory),
  earthAsia: createFAIcon(faEarthAsia),
  compass: createFAIcon(faCompass),
  home: createFAIcon(faHome),
  gear: createFAIcon(faGear),
};
