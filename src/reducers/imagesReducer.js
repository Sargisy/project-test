
const initState = {
    images: []
}


const imagesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_IMAGES':
            return {
                ...state,
                images:  action.imagesDataList
            }
        case 'CHANGE_PAGE_NUMBER':
            return {
                ...state,
                images:  [...state.images, ...action.imagesDataList]
            }
        default:
            return state
    }
}

export default imagesReducer;