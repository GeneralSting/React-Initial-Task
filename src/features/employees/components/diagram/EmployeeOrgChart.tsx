import { TreeNode } from "primereact/treenode";
import { Employee } from "../../types/api/employee";
import buildHierarchy from "../../utils/buildHierarchy";
import { useMemo } from "react";
import { Paper } from "@mui/material";
import { OrganizationChart } from "primereact/organizationchart";

const EmployeeOrgChart = ({
  employeesData,
  handleDialogOpen,
}: {
  employeesData: Employee[];
  handleDialogOpen: (employee: Employee) => void;
}) => {
  const hierarchicalData = useMemo(
    () => buildHierarchy(employeesData),
    [employeesData]
  );

  // Node template with updated styling
  const nodeTemplate = (node: TreeNode) => {
    return (
      <div
        className="node-container"
        onClick={() => handleDialogOpen(node.data.employee)}
      >
        <div className="node-content">
          <span className="node-name">
            {node.data.employee.firstName} {node.data.employee.lastName}
          </span>
          <span className="node-position">{node.data.employee.position}</span>
        </div>
      </div>
    );
  };

  return (
    <Paper
      sx={{
        padding: 2,
        maxHeight: "80vh",
        maxWidth: "90vw",
        overflowX: "auto",
        height: "80vh",
        width: "90vw",
      }}
    >
      {hierarchicalData && hierarchicalData.length > 0 && (
        <OrganizationChart
          value={hierarchicalData}
          nodeTemplate={nodeTemplate}
        />
      )}
    </Paper>
  );
};

export default EmployeeOrgChart;
