interface ICode{
    lines: ILine[];
}

interface ILine{
    words: IWord[];
}

interface IWord{
    text: string;
    color: string;
    special?: IWord[];
}

export default async function code () {return english}

const english: ICode = {
    lines:[
        {words: [
                {text: "public class", color: "text-violet-400"},
                {text: "SystemsEngineer", color: "text-amber-400"},
                {text:"", color: "", special: [
                        {text: "(", color: "text-white"},
                        {text: "string\t", color: "text-violet-400"},
                        {text: "name", color: "text-amber-600"},
                        {text: ",\t", color: "text-white"},
                        {text: "string\t", color: "text-violet-400"},
                        {text: "country", color: "text-amber-600"},
                        {text: ",\t", color: "text-white"},
                        {text: "int\t", color: "text-violet-400"},
                        {text: "experience", color: "text-amber-600"},
                        {text: ")", color: "text-white"},
                    ]
                },
                {text: ":", color: "text-white"},
                {text:"", color: "", special: [
                        {text: "IGreatestDeveloper", color: "text-amber-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "IBestChoice", color: "text-amber-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "IHireable", color: "text-amber-400"},
                    ]
                },
            ]
        },
        {words: [
                {text: "{", color: "text-white"},
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public readonly string", color: "text-violet-400"},
                {text: "Name", color: "text-white"},
                {text: "=", color: "text-sky-300"},
                {text: "name", color: "text-amber-600"},
                {text: ";", color: "text-white"},
                {text: "\t//Juan Camilo Zuñiga Pacheco", color: "text-gray-400"},
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public readonly string", color: "text-violet-400"},
                {text: "Country", color: "text-white"},
                {text: "=", color: "text-sky-300"},
                {text: "country", color: "text-amber-600"},
                {text: ";", color: "text-white"},
                {text: "\n//Colombia", color: "text-gray-400"},
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public readonly int", color: "text-violet-400"},
                {text: "Experience", color: "text-white"},
                {text: "=", color: "text-sky-300"},
                {text: "experience", color: "text-amber-600"},
                {text: ";", color: "text-white"},
                {text: "\n//3 years", color: "text-gray-400"},
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "ICollection", color: "text-amber-400"},
                {text: "", color: "", special: [
                        {text: "<", color: "text-white"},
                        {text: "string", color: "text-amber-400"},
                        {text: ">", color: "text-white"}
                    ]
                },
                {text: "Languages", color: "text-sky-300"},
                {text: "{", color: "text-white"},
                {text: "get;", color: "text-violet-400"},
                {text: "set;", color: "text-violet-400"},
                {text: "}", color: "text-white"},
                {text: "=", color: "text-sky-300"},
                {text: "", color: "", special: [
                        {text: "[", color: "text-white"},
                        {text: "\"C# 10+\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Java 17 & 21\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"TypeScript\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"SQL\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Kotlin\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Golang\"", color: "text-green-400"},
                        {text: "]", color: "text-white"},
                        {text: ";", color: "text-white"},
                    ]
                }
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "ICollection", color: "text-amber-400"},
                {text: "", color: "", special: [
                        {text: "<", color: "text-white"},
                        {text: "string", color: "text-amber-400"},
                        {text: ">", color: "text-white"}
                    ]
                },
                {text: "Backend", color: "text-sky-300"},
                {text: "{", color: "text-white"},
                {text: "get;", color: "text-violet-400"},
                {text: "set;", color: "text-violet-400"},
                {text: "}", color: "text-white"},
                {text: "=", color: "text-sky-300"},
                {text: "", color: "", special: [
                        {text: "[", color: "text-white"},
                        {text: "\"ASP.NET Core 6 & 8\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Spring Boot\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Fiber\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Gin\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Nestjs\"", color: "text-green-400"},
                        {text: "]", color: "text-white"},
                        {text: ";", color: "text-white"},
                    ]
                },
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "ICollection", color: "text-amber-400"},
                {text: "", color: "", special: [
                        {text: "<", color: "text-white"},
                        {text: "string", color: "text-amber-400"},
                        {text: ">", color: "text-white"}
                    ]
                },
                {text: "Frontend", color: "text-sky-300"},
                {text: "{", color: "text-white"},
                {text: "get;", color: "text-violet-400"},
                {text: "set;", color: "text-violet-400"},
                {text: "}", color: "text-white"},
                {text: "=", color: "text-sky-300"},
                {text: "", color: "", special: [
                        {text: "[", color: "text-white"},
                        {text: "\"React 18 & 19\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Angular 18\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Astro 4\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Nextjs 13 & 14\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Blazor\"", color: "text-green-400"},
                        {text: "]", color: "text-white"},
                        {text: ";", color: "text-white"},
                    ]
                },
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "ICollection", color: "text-amber-400"},
                {text: "", color: "", special: [
                        {text: "<", color: "text-white"},
                        {text: "string", color: "text-amber-400"},
                        {text: ">", color: "text-white"}
                    ]
                },
                {text: "Databases", color: "text-sky-300"},
                {text: "{", color: "text-white"},
                {text: "get;", color: "text-violet-400"},
                {text: "set;", color: "text-violet-400"},
                {text: "}", color: "text-white"},
                {text: "=", color: "text-sky-300"},
                {text: "", color: "", special: [
                        {text: "[", color: "text-white"},
                        {text: "\"SQL Server\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"PostgreSQL\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"MongoDB\"", color: "text-green-400"},
                        {text: ",\t", color: "text-white"},
                        {text: "\"Redis\"", color: "text-green-400"},
                        {text: "]", color: "text-white"},
                        {text: ";", color: "text-white"},
                    ]
                },
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "bool", color: "text-amber-400"},
                {text: "HaveExperience", color: "text-white"},
                {text: "()", color: "text-white"},
                {text: "=>", color: "text-white"},
                {text: "Experience\t", color: "text-white"},
                {text: ">", color: "text-white"},
                {text: "", color: "",special: [
                        {text: "0", color: "text-amber-600"},
                        {text: ";", color: "text-white"}
                    ]
                },
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "bool", color: "text-amber-400"},
                {text: "GreatestSkill", color: "text-white"},
                {text: "()", color: "text-white"},
                {text: "=>", color: "text-white"},
                {text: "", color: "", special: [
                        {text: "Languages", color: "text-blue-400"},
                        {text: ".", color: "text-white"},
                        {text: "Count\t", color: "text-blue-400"},
                        {text: "<\t", color: "text-white"},
                        {text: "Backend", color: "text-blue-400"},
                        {text: ".", color: "text-white"},
                        {text: "Count\t", color: "text-blue-400"},
                        {text: "+\t", color: "text-white"},
                        {text: "Frontend", color: "text-blue-400"},
                        {text: ".", color: "text-white"},
                        {text: "Count\t", color: "text-blue-400"},
                        {text: "+\t", color: "text-white"},
                        {text: "Databases", color: "text-blue-400"},
                        {text: ".", color: "text-white"},
                        {text: "Count", color: "text-blue-400"},
                        {text: ";", color: "text-white"},
                    ]
                },
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "bool", color: "text-amber-400"},
                {text: "IsBestChoice", color: "text-white"},
                {text: "()", color: "text-white"},
                {text: "=>", color: "text-white"},
                //Profession == "Systems Enginner" && Experience >= 3
                {text: "", color: "", special: [
                        {text: "Profession", color: "text-white"},
                        {text: " == ", color: "text-blue-400"},
                        {text: "\"Systems Engineer\"", color: "text-green-400"},
                        {text: " && ", color: "text-sky-400"},
                        {text: "Experience", color: "text-white"},
                        {text: " >= ", color: "text-sky-400"},
                        {text: "3", color: "text-amber-600"},
                        {text: ";", color: "text-white"},
                    ]
                }
            ]
        },
        {words:[
                {text: "\t", color: ""},
                {text: "public", color: "text-violet-400"},
                {text: "bool", color: "text-amber-400"},
                {text: "IsHireable", color: "text-white"},
                {text: "()", color: "text-white"},
                {text: "=>", color: "text-white"},
                //IsBestChoice() && GreatestSkill() && HaveExperience();
                {text: "", color: "", special: [
                        {text: "IsBestChoice", color: "text-blue-400"},
                        {text: "()", color: "text-white"},
                        {text: " && ", color: "text-sky-400"},
                        {text: "GreatestSkill", color: "text-blue-400"},
                        {text: "()", color: "text-white"},
                        {text: " && ", color: "text-sky-400"},
                        {text: "HaveExperience", color: "text-blue-400"},
                        {text: "();", color: "text-white"},
                    ]
                }
            ]
        },
        {words:[
                {text: "}", color: "text-white"},
            ]
        }
    ]
}