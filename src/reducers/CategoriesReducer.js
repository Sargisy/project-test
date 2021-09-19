
const initState = {
    categories: []
}


const categoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.categoriesList
            }
        default:
            return state
    }
}

export default categoriesReducer;