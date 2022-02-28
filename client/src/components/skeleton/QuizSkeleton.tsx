import Skeleton from "react-loading-skeleton";

const QuizSkeleton = () => {
  return (
    <>
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "736px",
        }}
      >
        <Skeleton height={124} />
        <Skeleton height={124} />
        <Skeleton height={124} />
        <Skeleton height={124} />
      </p>
    </>
  );
};

export default QuizSkeleton;
