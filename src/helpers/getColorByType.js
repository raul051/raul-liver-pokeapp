export function getColorByType(type) {
  switch (type) {
    case "grass":
      return ["#78C850", "#4CAF50"];
    case "fire":
      return ["#F08030", "#FF7043"];
    case "water":
      return ["#6890F0", "#1976D2"];
    case "electric":
      return ["#F8D030", "#FBC02D"];
    case "psychic":
      return ["#F85888", "#D81B60"];
    case "bug":
      return ["#A8B820", "#689F38"];
    case "normal":
      return ["#A8A878", "#757575"];
    default:
      return ["#A8A878", "#757575"];
  }
}
