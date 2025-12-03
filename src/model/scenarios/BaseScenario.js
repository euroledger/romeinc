export default class BaseScenario {
  constructor(controller, date) {
    if (new.target === BaseScenario) {
      throw new Error("Cannot instantiate BaseScenario directly.")
    }
    this.controller = controller
    this.dateStr = controller.getSelectedLabel(date)
    this.warsBox = []
  }

  // Abstract method (no implementation here)
  setUpWars() {
    throw new Error("Method 'setUpWars()' must be implemented by derived classes.")
  }

  setUpProvinces() {
    throw new Error("Method 'setUpProvinces()' must be implemented by derived classes.")
  }

  getName() {
    return this.dateStr
  }
}
