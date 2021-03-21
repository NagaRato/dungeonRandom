function Room(name) {
	this.name = name;
	this.stuff = [];

	this.connectTo = function(otherRoom, side) {
		switch (side) {
			case 'north':
				this.north = otherRoom;
				otherRoom.south = this;
			break;
			case 'east':
				this.east = otherRoom;
				otherRoom.west = this;
			break;
			case 'south':
				this.south = otherRoom;
				otherRoom.north = this;
			break;
			case 'west':
				this.west = otherRoom;
				otherRoom.east = this;
			break;
		}
	}

	this.look = function() {
		return name;
	}

	this.doors = function() {
		doorCollection = [];
		if (this.north) doorCollection.push('noorden');
		if (this.east) doorCollection.push('oosten');
		if (this.south) doorCollection.push('zuiden');
		if (this.west) doorCollection.push('westen');
		return doorCollection;
	}
}
