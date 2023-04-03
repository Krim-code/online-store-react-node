import {$host} from "./index";

export const insertLocalBasket = (data) => {
    let array = JSON.parse(localStorage.getItem('card')) || [];

    array.push(data)
    localStorage.setItem('card', JSON.stringify(array))
}
export const getLocalBasket = () => {

    let array = JSON.parse(localStorage.getItem('card')) || []
    return array
}
export const NullLocalStorageBasket = () =>{
    localStorage.setItem('card', JSON.stringify([]))
}
export const tgSend = async () => {
    let array = JSON.parse(localStorage.getItem('card'))
    const {data} = await $host.post('api/tg', {array})
    return data
}