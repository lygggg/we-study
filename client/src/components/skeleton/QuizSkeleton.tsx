import Skeleton from "react-loading-skeleton";

const QuizSkeleton = () => {
  return (
    <>
      <p
        style={{
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          flex: 1,
        }}
      >
        <Skeleton height={134} />
        <Skeleton height={134} />
        <Skeleton height={134} />
      </p>
    </>
  );
};

export default QuizSkeleton;
