export default class BaseScenario {
  constructor(controller, date) {
    this.dateStr = controller.getSelectedLabel(date)
    this.warsBox = []
    if (new.target === BaseScenario) {
      throw new Error("Cannot instantiate BaseScenario directly.")
    }
  }

  // Abstract method (no implementation here)
  setUpWars() {
    throw new Error("Method 'setUpWars()' must be implemented by derived classes.")
  }

  getName() {
    return this.dateStr
  }
}
