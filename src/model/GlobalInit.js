import { loadCounters } from "../CounterLoader";
import Controller from "../controller/Controller";

export default class GlobalInit {
  static controller = null
  static counters = null

  static init() {
    this.controller = new Controller()
    this.counters = loadCounters(this.controller)
  }
}
