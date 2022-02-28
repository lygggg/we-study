import Skeleton from "react-loading-skeleton";

const InfoSkeleton = () => {
  return (
    <>
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "314px",
        }}
      >
        <Skeleton height={132} />
        <Skeleton height={132} />
        <Skeleton height={132} />
      </p>
    </>
  );
};

export default InfoSkeleton;
