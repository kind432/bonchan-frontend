import {bindActionCreators} from "@reduxjs/toolkit";
import {bonchanActions} from "../store/bonchan/bonchan.slice";
import {useDispatch} from "react-redux";

const actions = {
    ...bonchanActions
}


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}