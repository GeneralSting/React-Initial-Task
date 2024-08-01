import { TreeNode } from "primereact/treenode";
import { Employee } from "../types/api/employee";
import getColorForManager from "./getColorForManager";

const buildHierarchy = (employees: Employee[]): TreeNode[] => {
  const employeeMap = new Map<number, TreeNode>();

  employees.forEach((emp) => {
    employeeMap.set(emp.id, {
      expanded: true,
      data: {
        employee: emp,
      },
      children: [],
    });
  });

  const rootNodes: TreeNode[] = [];

  employees.forEach((emp) => {
    const currentEmployee = employeeMap.get(emp.id);
    if (currentEmployee) {
      if (emp.manager_id) {
        const manager = employeeMap.get(emp.manager_id);
        if (manager && manager.children) {
          manager.children.push(currentEmployee);
          currentEmployee.style = getColorForManager(emp.manager_id);
        }
      } else {
        rootNodes.push(currentEmployee);
        currentEmployee.style = getColorForManager(emp.id);
      }
    }
  });

  return rootNodes;
};

export default buildHierarchy;
