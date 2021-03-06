import Skeleton from "react-loading-skeleton";

const ButtonSkeleton = () => {
  return (
    <>
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100px",
        }}
      >
        <Skeleton height={44} />
      </p>
    </>
  );
};

export default ButtonSkeleton;
