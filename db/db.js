const db = {
  pets: [
      {
          id: 1,
          name: 'Rex',
          type: 'dog',
          age: 3,
          breed: 'labrador',
      },
      {
          id: 2,
          name: 'Fido',
          type: 'dog',
          age: 1,
          breed: 'poodle',
      },
      {
          id: 3,
          name: 'Mittens',
          type: 'cat',
          age: 2,
          breed: 'tabby',
      },
  ],
  nicknames: [
    {
        pet_id: 1,
        name: 'abc',
    },
    {
        pet_id: 2,
        name: 'def',
    },
    {
        pet_id: 3,
        name: 'ghi',
    },
  ]
}

export default db