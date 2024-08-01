import { TableCell } from "@mui/material";
import { FC, useState } from "react";
import { TableCellImageProps } from "../../types/table/tableCellImageProps";
import { FallbackImage } from "../../../../components";

const TableCellImage: FC<TableCellImageProps> = ({
  imgUrl,
  employeeName,
  employeeLastName,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <TableCell align="center">
      {imageError ? (
        <FallbackImage />
      ) : (
        <img
          src={imgUrl}
          alt={`${employeeName} ${employeeLastName}`}
          loading="lazy"
          width="75"
          height="75"
          className="rounded-img"
          onError={handleImageError}
        />
      )}
    </TableCell>
  );
};

export default TableCellImage;
