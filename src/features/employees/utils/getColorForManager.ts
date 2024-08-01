const colors = ["#D66F29", "#30b022", "#2990d6", "#D62990"];

const managerColors = new Map<number, React.CSSProperties>();
let colorIndex = 0;

const getColorForManager = (managerId: number): React.CSSProperties => {
  if (!managerColors.has(managerId)) {
    // Assign a new color if manager ID is not in the map
    const color = colors[colorIndex % colors.length];
    managerColors.set(managerId, { backgroundColor: color, color: "#FFFFFF" });
    colorIndex++;
  }
  return managerColors.get(managerId)!;
};

export default getColorForManager;
