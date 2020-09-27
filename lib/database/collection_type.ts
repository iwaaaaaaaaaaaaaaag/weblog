export interface Posts {
    url: string,
    published: Date,
    update: Date,
    title: string,
    content: string,
    keywords: string,
    authors: string
}

export interface Users {
    email: string,
    name: string,
    password: string,
    role: string
}

export interface UsersSession extends Users {
    permissions: string[]
}


export interface Privileges {
    role: string,
    permissions: string[]    
}
