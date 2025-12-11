class Province {
  constructor({ name, homeland, command, gold, icons, connections, emperors }) {
    this.name = name,
    this.homeland = homeland,
    this.command = command
    this.gold = gold
    this.icons = icons
    this.emperors = emperors ?? []

    this.connections = connections
  }
}

export default Province