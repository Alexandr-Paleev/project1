function makeCounter(){
    		var start = 1;
    		function counter(){
    			return start++;
    		}
    		counter.set = function(value){
    			start = value;
    		}
    		counter.reset = function(){
    			start = 1;
    		}
    		return counter;
    	}
    	var count = makeCounter();
        alert(count());
        alert(count());
        alert(count());
        count.set(7);
        alert(count());
        alert(count());
        alert(count());
        count.reset();
        alert(count());
        alert(count());