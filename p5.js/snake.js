function snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
		
	}
		this.eat = function(pos) {
			var d = dist(this.x, this.y, pos.x, pos.y);
			if(d < 1) {
				this.total++;
				return true;
			} else {
				return false;
			}

		}
		this.death = function() {
			for (var i = 0; i < this.tail.length; i++) {
				var pos = this.tail[i];
				var d = dist(this.x, this.y, pos.x, pos.y);
				if(d < 1) {
					console.log('start over');
					this.total = 0;
					this.tail = [];
				}
			}
		}
	this.update = function() {
		if (this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length-1; i++) {
			this.tail[i] = this.tail[i+1];
	}
	
		}
    this.tail[this.total-1] = createVector(this.x, this.y);
     
	if(this.x === -scl || this.y === -scl) {
		this.x = 0;
		this.y = 0;
		this.xspeed = 1;
		this.yspeed = 0;
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
        this.x = constrain(this.x, -scl, width+scl);
		this.y = constrain(this.y, -scl, width+scl);
    } else if(this.x === width+scl || this.y === width+scl) {
		this.x = 0;
		this.y = 0;
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
        this.x = constrain(this.x, -scl, width+scl);
		this.y = constrain(this.y, -scl, width+scl);
	} else { 
        
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, -scl, width+scl);
		this.y = constrain(this.y, -scl, width+scl);
	}
		
	if(keyCode === UP_ARROW) {
		DOWN_ARROW = false;
		RIGHT_ARROW = true;
		LEFT_ARROW = true;

	} else if(keyCode === DOWN_ARROW) {
		UP_ARROW = false;
		RIGHT_ARROW = true;
		LEFT_ARROW = true;

	} else if(keyCode === RIGHT_ARROW) {
		LEFT_ARROW = false;
		UP_ARROW = true;
		DOWN_ARROW = true;

	} else if(keyCode === LEFT_ARROW) {
		RIGHT_ARROW = false;
		UP_ARROW = true;
		DOWN_ARROW = true;

	}

	}

	this.show = function(r,g,b) {
		fill(0,150,150);
		for(var i = 0; i < this.total; i++) {
			fill(r,g,b);
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
		
	}
}