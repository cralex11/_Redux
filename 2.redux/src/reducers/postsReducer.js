// eslint-disable-next-line
export default (state, action) => {
    if (action === 'FETCH_POSTS')
        return state.payload
    return state
}
