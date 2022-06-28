export class Data {
    id:string;
    name:string;
    description:string;
    webReference:string;
    checked?: boolean;


    constructor(id: string,name: string ,description: string,webReference: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.webReference = webReference;
    }
}