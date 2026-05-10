import IconBundle from "~/components/icon-bundle";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard(props: FeatureCardProps) {
  return (
    <div class={"feature-card"}>
      <div class={"feature-icon"}>
        <IconBundle name={props.icon} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
