import {makeAutoObservable} from "mobx";

import xiaomi from '../assets/slidshows/1537346501_xiaomi-mi-8-lite-youth-fantasy-blue.jpg'
import iphone_12 from '../assets/slidshows/iphone12.jpg'
import iphone_x from '../assets/slidshows/iphone_x.jpg'
import galaxy20 from '../assets/slidshows/Galaxy_S20_Plus_S20_Ultra_02_image-1.jpg'
import z_flip4 from '../assets/slidshows/z-flip.jpg'
import iphone_x_2 from '../assets/slidshows/Apple-iPhone-X-and-MacBook_1920x1080.jpg'

export default class DeviceStore{
    constructor() {
        this._types = []
        this._brands = []


        this._slidshow=[
            {id:1, img:xiaomi, text:'some_text', title:'some text'},
            {id:2, img:iphone_12, text:'some_text', title:'some text'},
            {id:3, img:iphone_x, text:'some_text', title:'some text'},
            {id:4, img:iphone_x_2, text:'some_text', title:'some text'},
            {id:5, img:galaxy20, text:'some_text', title:'some text'},
            {id:6, img:z_flip4, text:'some_text', title:'some text'},]
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }


    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get slidshow(){
        return this._slidshow
    }
    get devices(){
        return this._devices
    }
    get SelectedType(){
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

}