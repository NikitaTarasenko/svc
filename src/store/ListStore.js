import { makeAutoObservable } from "mobx";

export default class ListStore {
  constructor() {
    this._listData = [];
    this._currentListItem = 0;
    this._questionsIsOpened = false;
    makeAutoObservable(this);
  }

  setListData(data) {
    this._listData = data;
  }
  setCurrentListItem(index) {
    this._currentListItem = index;
  }
  setQuestionsIsOpened(data) {
    this._questionsIsOpened = data;
  }
  get listData() {
    return this._listData;
  }

  get currentListItem() {
    return this._currentListItem;
  }

  get questionsIsOpened() {
    return this._questionsIsOpened;
  }
}
