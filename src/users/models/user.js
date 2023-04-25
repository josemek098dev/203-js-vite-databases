export class User {


    /**
     * 
     * @param {Like<Object>} userDatalike 
     */
constructor({id ,isActive ,balance ,avatar ,firstName ,lastName ,gender}){
      this.id         = id;
      this.isActive   = isActive;
      this.balance    =  balance;
      this.avatar     =  avatar;
      this.firstName  =  firstName;
      this.lastName   =  lastName;
      this.gender     = gender;
}

}