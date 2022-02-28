import Skeleton from "react-loading-skeleton";

const ButtonSkeleton = () => {
  return (
    <>
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "150px",
        }}
      >
        <Skeleton height={50} />
      </p>
    </>
  );
};

export default ButtonSkeleton;
