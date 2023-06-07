const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: "1",
      name: "Learning React JS",
      completed: false,
      priority: "Medium",
    },
    {
      id: "2",
      name: "Learning Redux",
      completed: true,
      priority: "High",
    },
    {
      id: "3",
      name: "Learning TypeScript",
      completed: false,
      priority: "Medium",
    },
  ],
};

const rootReducer = (state = initState, action) => {
    console.log({state, action});
    switch (action.type) {
        case 'todoList/addTodo':
            return{
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
          case'filters/searchFilterChange': 
          return {
            ...state, 
            filters: {
              ...state.filters, 
              search: action.payload
            }
          }
    
        default:
            return state;
    }

};

export default rootReducer;
