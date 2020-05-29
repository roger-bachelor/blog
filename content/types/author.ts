import { Slug } from './slug'

export interface IAuthor {
    name: string
    slug: Slug
    image?: string

    // Markdown formatted
    bio?: string
}

const example: IAuthor = {
    name: 'Sondre Gjellestad',
    slug: { current: 'sondregj' },
    image: 'https://antive.tech/sondregj.png',
    bio: 'Making computers do things',
}
