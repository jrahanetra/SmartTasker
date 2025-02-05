export default function getCssVariable (variable: string)  {
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}
