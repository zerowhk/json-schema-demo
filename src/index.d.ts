type Partial<T> = {
    [P in keyof T]?: T[P]
}

type Model = {
    name: string,
    schema: object,
    validate: (data: object) => {
        valid: boolean,
        errorsText: string,
    },
};

export const Car: Partial<Model>
export const Person: Partial<Model>
export const Animal: Partial<Model>
export const CarList: Partial<Model>