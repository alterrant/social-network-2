const state = {
    mainBasicPage: {
        myPostsData: [
            {id: '0', name: 'Vasya: ', say: 'Hi', likes: '0'},
            {id: '1', name: 'Nikita: ', say: 'Fuck you', likes: '15'}
        ]
    },
    mainPostsPage: {
        personsData: [
            {id: '1', name: 'persona1'},
            {id: '2', name: 'persona2'},
            {id: '3', name: 'persona3'}
        ],
        messagesData: {
            persona1: [
                {id: '1', name: 'me', message: 'messageMe'},
                {id: '2', name: 'persona', message: 'messagePersona1'},
                {id: '3', name: 'me', message: 'messageMe'},
                {id: '4', name: 'persona', message: 'messagePersona1'},
                {id: '5', name: 'persona', message: 'messagePersona1'}
            ],
            persona2: [
                {id: '1', name: 'persona', message: 'messagePersona2'},
                {id: '2', name: 'me', message: 'messageMe'},
                {id: '3', name: 'persona', message: 'messagePersona2'},
            ],
            persona3: [
                {id: '1', name: 'persona', message: 'messagePersona3'},
                {id: '2', name: 'me', message: 'messageMe'},
                {id: '3', name: 'me', message: 'messageMe'},
                {id: '4', name: 'me', message: 'messageMe'},
                {id: '5', name: 'persona', message: 'messagePersona3'}
            ]
        },
    },
    sitebar: {
        links: ['profile', 'message', 'news', 'music', 'settings'],
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
    }
}

export default state;