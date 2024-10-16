import { BaseRepo, IMenu } from "snapmeal-common";
import { Menu } from "../model/menu";

class MenuRepo extends BaseRepo<IMenu>{
    constructor(){
        super(Menu);
    }
}

export const menuRepo = new MenuRepo();