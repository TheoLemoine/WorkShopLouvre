export default <StateType>(
    reducerMap: Map<string, (state: StateType, action: { type: string }) => StateType>
) => {
    return (state: StateType, action: { type: string }) =>
        reducerMap.get(action.type)(state, action)
}
