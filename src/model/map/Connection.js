class Connection {
  constructor({ to, connectionType, destinationType }) {
    this.to = to // where does this connection connect to
    this.connectionType = connectionType // road, desert etc
    this.destinationType = destinationType // province or homeland province
  }
}

export default Connection