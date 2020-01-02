export const initialTodosState = [
  {
    item: 'Refresh on Redux material',
    completed: true,
    id: 1
  }, 
  {
    item: 'Get a head start on Async Redux',
    completed: false,
    id: 2
  },
  {
    item: 'Take a peek at advanced testing',
    completed: false,
    id: 3
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case('ADD_TODO'):
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
    case('TOGGLE_COMPLETED'):
      return (  
        state.map( (todo) =>{
          if( todo.id === action.payload ) {
            return { ...todo, completed: !todo.completed }
          }
          return todo;
        })
      )
    case('CLEAR_COMPLETED'):
      return (
        state.filter( todo => !todo.completed )
      )
    default: 
      return state;
  }
};