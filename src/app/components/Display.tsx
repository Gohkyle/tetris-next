import { StyledDisplay } from "./styles/StyledDisplay";

interface iProps {
  text: string;
}

export const Display = ({ text }: iProps) => {
  return (
  <StyledDisplay>
    {text}
</StyledDisplay>
  )
};
