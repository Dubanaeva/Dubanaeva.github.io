import {useDispatch, useSelector} from "react-redux";
import {setAuthenticated} from "../redux/currentUserSlice";


// Текущий статус авторизации пользователя и его установка
export function useLoginStatus() {
    const token = localStorage.getItem('token')
    return Boolean(token)
}
