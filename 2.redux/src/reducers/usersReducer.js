export default function (state = [], actions) {
    switch (actions.type) {
        case "FETCH_USERS":
            return [...state,actions.payload]
        default:
            return state
    }
}
