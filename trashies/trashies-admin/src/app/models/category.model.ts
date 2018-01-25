import Contestant from './contestant.model';

class Category {
    _id: string;
    title: string;
    contestants: Contestant[];

    constructor(){
        this.title = "";
        this.contestants = [];
    }
}

export default Category;