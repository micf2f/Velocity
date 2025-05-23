const signUpForm = [
    {
        id: 'name',
        label: 'Nickname',
        validation: {
            required: 'Field is required',
            minLength: {
                value: 3,
                message: "At least 3 characters",
            }
        }
    },
    {
        id: 'email',
        label: 'Email',
        validation: {
            required: 'Field is required',
            minLength: {
                value: 5,
                message: "At least 5 characters",
            },
            pattern: {
                value: /^\S+@\S+$/i,
                message: 'Wrong email format'
            }
        }
    },
    {
        id: 'password',
        label: 'Password',
        validation: {
            required: 'Field is required',
            minLength: {
                value: 8,
                message: "At least 8 characters",
            }
        }
    },
]


export default signUpForm;