export class Encapsulate {
    private name: String; //private
    private address: String; //private
    private id: Number; //private

    constructor(name: String, address: String, id: Number) { //Very Important to make data-types of parameters
        this.id = id;;
        this.address = address;
        this.name = name;
    }
}