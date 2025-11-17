export default class BaseScenario {
  constructor(controller, date) {
    this.dateStr = controller.getSelectedLabel(date)
    if (new.target === BaseScenario) {
      throw new Error("Cannot instantiate BaseScenario directly.")
    }
  }

  // Abstract method (no implementation here)
  setUpEmperors() {
    throw new Error("Method 'setUpEmperors()' must be implemented by derived classes.")
  }

  getName() {
    return this.dateStr
  }
}
