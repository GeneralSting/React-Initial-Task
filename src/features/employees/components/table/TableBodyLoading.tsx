import { Skeleton, TableCell, TableRow } from "@mui/material";

const TableBodyLoading = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonRow key={index} cellCount={7} />
      ))}
    </>
  );
};

const SkeletonRow = ({ cellCount }: { cellCount: number }) => {
  return (
    <TableRow style={{ minHeight: 75 }}>
      {Array.from({ length: cellCount }).map((_, index) => (
        <TableCell align="center" key={index}>
          {index === 1 ? (
            <Skeleton
              variant="rectangular"
              sx={{ aspectRatio: "auto 75 / 75" }}
              width={75}
              height={75}
            />
          ) : (
            <Skeleton variant={"text"} />
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableBodyLoading;
