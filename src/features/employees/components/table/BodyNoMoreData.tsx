import { TableCell, TableRow } from "@mui/material";

const BodyDataStatus = ({message}: {message: string}) => {
  return (
    <TableRow>
      <TableCell colSpan={7} align="center">
        {message}
      </TableCell>
    </TableRow>
  );
};

export default BodyDataStatus;
