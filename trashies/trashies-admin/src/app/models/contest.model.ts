import Category from '../models/category.model';

class Contest {
    _id: string;
    title: string;
    categories: Category[];
}

export default Contest;