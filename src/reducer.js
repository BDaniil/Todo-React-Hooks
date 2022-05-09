export default function (state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          id: Math.random() * 1000,
        },
      ];
    case "delete":
      return state.filter(el => el.id !== action.payload);
    case "mark":
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    default:
      return state;
  }
}
