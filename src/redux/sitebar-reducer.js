let initialState = {
  links: ['profile', 'message', 'users', 'music', 'settings'],
  friends: [
    {
      id: 1,
      name: 'person1',
      img: 'https://vsthemes.org/uploads/posts/2018-11/1581998424_epic-space_vsthemes_ru-45.jpg'
    },
    {
      id: 2,
      name: 'person2',
      img: 'https://vsthemes.org/uploads/posts/2018-11/1581998424_epic-space_vsthemes_ru-45.jpg'
    },
    {
      id: 3,
      name: 'person3',
      img: 'https://vsthemes.org/uploads/posts/2018-11/1581998424_epic-space_vsthemes_ru-45.jpg'
    }
  ]
};

const siterbarReducer = (state = initialState, action) => {
  return state;
}

export default siterbarReducer