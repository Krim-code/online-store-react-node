
import {makeAutoObservable} from "mobx";


export default class BasketStore{
    constructor() {
        this._basket = []
        this._basketTotal = 0
        makeAutoObservable(this)

    }
    setBasketNull() {
        this._basket = []
        this._basketTotal = 0
    }
    setBasket(basket) {
        this._basket = basket
    }
    setBasketTotal(basketTotal) {
        this._basketTotal = basketTotal
    }

    get basket() {
        return this._basket
    }

    get basketTotal(){
        return this._basketTotal
    }

}