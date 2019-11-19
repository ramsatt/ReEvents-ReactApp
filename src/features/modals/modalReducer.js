import {
    MODAL_OPEN,
    MODAL_CLOSE
} from "./modalConstants";
import {
    createReducer
} from "../../app/common/utils/reducerUtils";

const initialState = false;

const openModal = (state, payload) => {
    const {
        modalType,
        modalProps
    } = payload;
    return {
        modalType,
        modalProps
    }
}

const closeModal = (state) => {
    return null;
}

export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})