import ContentBox from "@components/ContentBox";
import Description from "./Description";
import Title from "./Title";

const Intro = () => {
  return (
    <>
      <ContentBox props={{ overflow: "auto", height: "100%" }}>
        <Title />
        <Description />
      </ContentBox>
    </>
  );
};

export default Intro;
