import { makeAutoObservable } from "mobx";

export default class ListStore{
    constructor(){
        this._listData = [];
        this._currentListItem = 0;
        makeAutoObservable(this);
    }

    setListData(data){
        this._listData = data;
    }
    setCurrentListItem(index){
        this._currentListItem = index;
    }

    get listData(){
       return this._listData;  
    }

    get currentListItem(){
        return this._currentListItem;  
     }
}