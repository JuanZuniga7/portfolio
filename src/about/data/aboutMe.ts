import IContent from "./ISections";

export default async function getAboutMe(lang: string){
    switch(lang){
        case "es":
            return es;
        case "en":
            return en;
        default:
            return en;
    }
}

const en: IContent = {
    lines:[
        {words:[
            {text: "Hello everyone! I'm Juan Camilo Zuñiga", special: true},
                {text: ", a passionate college student from Colombia with "},
                {text: "3 years of verifiable work experience and an additional year working independently. ", special: true}
            ]
        },
        {words:[
            {text: "I'm currently about to enroll in my 11th semester of Systems Engineering. Although the pandemic presented me with challenges that led me to reduce my hours to balance my work schedules,"},
                {text: "I'm excited because I'm almost reaching my goal of graduating. ", special: true}
            ]
        },
        {words:[
                {text: "I estimate that in my 12th semester I will complete my academic journey in this career. ", special: true},
                {text: " At 23 years old, I currently live in the charming city of Santa Marta."},
            ]
        },
        {words:[
                {text: "I'm eager for what the future has in store for me on this exciting academic and professional path!", special: true}
            ]
        }
    ]
}

const es: IContent = {
    lines:[
        {words:[
            {text: "¡Hola a todos! Soy Juan Camilo Zuñiga", special: true},
                {text: ", un apasionado estudiante universitario de Colombia con "},
                {text: "3 años de experiencia laboral comprobable y un año adicional trabajando de manera independiente. ", special: true}
            ]
        },
        {words:[
            {text: "Actualmente, estoy próximo a cursar mi 11va matrícula en Ingeniería de Sistemas. Aunque la pandemia me presentó desafíos que me llevaron a reducir mi carga horaria para equilibrar mis horarios laborales,"},
                {text: "estoy emocionado porque ya casi alcanzo mi meta de titularme. ", special: true}
            ]
        },
        {words:[
                {text: "Estimo que en mi 12va matrícula completaré mi recorrido académico en esta carrera. ", special: true},
                {text: " Con 23 años de edad, actualmente vivo en la encantadora ciudad de Santa Marta."},
            ]
        },
        {words:[
                {text: "¡Estoy ansioso por lo que el futuro tiene preparado para mí en este emocionante camino académico y profesional!", special: true}
            ]
        }
    ]
}