import { iconGroups } from "../assets/icons";
interface IconComponentProps {
  iconName: keyof typeof iconGroups;
}

const IconComponent = ({ iconName }: IconComponentProps) => {
  const Icon = iconGroups[iconName];
  return (
    <div
      style={{
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon size={34} style={{ width: 34, height: 34 }} />
    </div>
  );
};

export default IconComponent;
