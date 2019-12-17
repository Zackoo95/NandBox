export class UserModel {
    name: string;
    email: string;
    password: string;
    Image: string;
    Age: number;

    constructor(name: string, email: string, pass: string, Image: string, Age: number) {
        this.name = name;
        this.email = email;
        this.password = pass;
        this.Image = Image;
        this.Age = Age;
    }
}