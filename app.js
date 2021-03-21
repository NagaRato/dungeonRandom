dungeon = {
	rooms: [],
	current: null,
	init: function(){
		this.rooms[0] = new Room('keuken');
		this.rooms[1] = new Room('woonkamer');
		this.rooms[2] = new Room('toilet');
		this.rooms[3] = new Room('gang');
		this.rooms[4] = new Room('slaapkamer');
		this.rooms[5] = new Room('badkamer');
		this.rooms[6] = new Room('kelder');
		this.rooms[7] = new Room('kantoor');
		this.rooms[8] = new Room('tuin');
		this.rooms[9] = new Room('schuur');

		this.rooms[3].connectTo(this.rooms[0], 'north');
		this.rooms[3].connectTo(this.rooms[4], 'east');
		this.rooms[4].connectTo(this.rooms[5], 'east');
		this.rooms[0].connectTo(this.rooms[6], 'west');
		this.rooms[0].connectTo(this.rooms[2], 'north');
		this.rooms[0].connectTo(this.rooms[1], 'east');
		this.rooms[1].connectTo(this.rooms[7], 'east');
		this.rooms[1].connectTo(this.rooms[8], 'north');
		this.rooms[8].connectTo(this.rooms[9], 'north');
	
		this.current = this.rooms[3];
		this.look();
		document.getElementById('controlsStart').style.display = 'none';
		document.getElementById('controlsMoving').style.display = 'block';
	},

	moveTo: function(direction){
		switch (direction){
			case 'north':
				if (this.current.north) {
					this.current = this.current.north;
				}
			break;
			case 'east':
				if (this.current.east) {
					this.current = this.current.east;
				}
			break;
			case 'south':
				if (this.current.south) {
					this.current = this.current.south;
				}
			break;
			case 'west':
				if (this.current.west) {
					this.current = this.current.west;
				}
			break;
		};
		this.look();
	},

	look: function() {
		document.getElementById('display').innerHTML += "Je bent nu in de " + dungeon.current.look()+'<br>';
	},

	doors: function(){
		doorsCollection = dungeon.current.doors();
		text = '';
		if (doorsCollection.length == 1)
		{
			text = 'Deze kamer heeft 1 deur in het ';
		}
		else
		{
			text = 'Deze kamer heeft deuren in het ';	
		}
		for (i = 0; i < doorsCollection.length; i++) {
			text += doorsCollection[i] + ', ';
			
		}
		document.getElementById('display').innerHTML += text + '<br>';
	}
};
