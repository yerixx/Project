import { iconGroups } from "./icons";
interface IconComponentProps {
  iconName: keyof typeof iconGroups;
}

const IconComponent = ({ iconName }: IconComponentProps) => {
  const Icon = iconGroups[iconName];
  return (
    <div
      style={{
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon size={28} style={{ width: 28, height: 28 }} />
    </div>
  );
};

export default IconComponent;
