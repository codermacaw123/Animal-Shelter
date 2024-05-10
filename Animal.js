class Pet{
    constructor(species,breed,fluffiness,attention,age,name,contact,allergies,profile,purpose){
        
        this.species= species;
        this.breed= breed;
        this.fluffiness=fluffiness;
        this.attention=attention;
        this.age=age;
        this.name=name;
        this.contact=contact;
        this.allergies=allergies;
        this.profile=profile;
        this.purpose=purpose;

    }

    eat(whenToFeed){
        console.log(whenToFeed);
    }

    call(){
        console.log("Call pet parent on - "+this.contact)
        
    }
    
   



    
    
}

