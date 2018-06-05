function User(name, birthday){
        this.name = name;
        this.birthday = birthday;
       
       Object.defineProperty(this, "age", {
        get: function(){
            var todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
       });
       }
       var petya = new User("Petya", new Date(1982,02,02));
       alert(petya.birthday);
       alert(petya.age);
       alert(petya.name);