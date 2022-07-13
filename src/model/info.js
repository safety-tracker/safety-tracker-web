export const daytimeMap = new Map();
daytimeMap.set(0, "PLENA_NOITE");
daytimeMap.set(1, "PLENA_NOITE");
daytimeMap.set(2, "PLENA_NOITE");
daytimeMap.set(3, "PLENA_NOITE");
daytimeMap.set(4, "PLENA_NOITE");
daytimeMap.set(5, "AMANHECER");
daytimeMap.set(6, "AMANHECER");
daytimeMap.set(7, "AMANHECER");
daytimeMap.set(8, "PLENO_DIA");
daytimeMap.set(9, "PLENO_DIA");
daytimeMap.set(10, "PLENO_DIA");
daytimeMap.set(11, "PLENO_DIA");
daytimeMap.set(12, "PLENO_DIA");
daytimeMap.set(13, "PLENO_DIA");
daytimeMap.set(14, "PLENO_DIA");
daytimeMap.set(15, "PLENO_DIA");
daytimeMap.set(16, "PLENO_DIA");
daytimeMap.set(17, "ANOITECER");
daytimeMap.set(18, "ANOITECER");
daytimeMap.set(19, "ANOITECER");
daytimeMap.set(20, "PLENA_NOITE");
daytimeMap.set(21, "PLENA_NOITE");
daytimeMap.set(22, "PLENA_NOITE");
daytimeMap.set(23, "PLENA_NOITE");

const weekday = new Map();
weekday.set(0, "DOMINGO");
weekday.set(1, "SEGUNDA");
weekday.set(2, "TERCA");
weekday.set(3, "QUARTA");
weekday.set(4, "QUINTA");
weekday.set(5, "SEXTA");
weekday.set(6, "SABADO");

export const possibleWeekday = [
    { value: "SEGUNDA", label: "Segunda-feira" },
    { value: "TERCA", label: "Terça-feira" },
    { value: "QUARTA", label: "Quarta-feira" },
    { value: "QUINTA", label: "Quinta-feira" },
    { value: "SEXTA", label: "Sexta-feira" },
    { value: "SABADO", label: "Sabado" },
    { value: "DOMINGO", label: "Domingo" }]

export const possibleDaytime = [
    { value: 0, label: "0h" },
    { value: 1, label: "1h" },
    { value: 2, label: "2h" },
    { value: 3, label: "3h" },
    { value: 4, label: "4h" },
    { value: 5, label: "5h" },
    { value: 6, label: "6h" },
    { value: 7, label: "7h" },
    { value: 8, label: "8h" },
    { value: 9, label: "9h" },
    { value: 10, label: "10h" },
    { value: 11, label: "11h" },
    { value: 12, label: "12h" },
    { value: 13, label: "13h" },
    { value: 14, label: "14h" },
    { value: 15, label: "15h" },
    { value: 16, label: "16h" },
    { value: 17, label: "17h" },
    { value: 18, label: "18h" },
    { value: 19, label: "19h" },
    { value: 20, label: "20h" },
    { value: 21, label: "21h" },
    { value: 22, label: "22h" },
    { value: 23, label: "23h" },
]

export const possibleProvinces = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AM", label: "Amazonas" },
    { value: "AP", label: "Amapá" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espirito Santo" },
    { value: "MA", label: "Maranhão" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MT", label: "Mato Grosso" },
    { value: "PA", label: "Para" },
    { value: "PB", label: "Paraíba" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piaui" },
    { value: "PR", label: "Paraná" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RO", label: "Rondonia" },
    { value: "RR", label: "Roraima" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SE", label: "Sergipe" },
    { value: "SP", label: "São Paulo" },
    { value: "TO", label: "Tocantins" }]

export const possibleWeather = [
    { value: "CHUVA", label: "Chuvoso" },
    { value: "SOL", label: "Ensolarado" },
    { value: "GAROA/CHUVISCO", label: "Garoando/Chuviscando" },
    { value: "NEVE", label: "Nevando" },
    { value: "GRANIZO", label: "Granizo" },
    { value: "CEU_CLARO", label: "Céu claro" },
    { value: "NEVOEIRO/NEBLINA", label: "Nevoeiro ou neblina" },
    { value: "NUBLADO", label: "Nublado" },
    { value: "VENTO", label: "Ventando" }
]


export const possibleLaneTypes = [
    { value: "SIMPLES", label: "Simples" },
    { value: "MULTIPLA", label: "Multipla" },
    { value: "DUPLA", label: "Multipla" }
]

export const possibleLaneTracing = [
    { value: "CURVA", label: "Curva" },
    { value: "TUNEL", label: "Tunel" },
    { value: "CRUZAMENTO", label: "Cruzamento" },
    { value: "RETA", label: "Reta" },
    { value: "ROTATORIA", label: "Rotatória" },
    { value: "VIADUTO", label: "Viaduto" },
    { value: "DESVIO_TEMPORARIO", label: "Desvio temporário" },
    { value: "PONTE", label: "Ponte" },
    { value: "INTERSECAO_DE_VIAS", label: "Intersecção de vias" },
    { value: "RETORNO_REGULAMENTADO", label: "Retorno regulamentado" }
]

export const possibleDayPhase = [
    { value: "ANOITECER", label: "Anoitecer" },
    { value: "AMANHECER", label: "Amanhecer" },
    { value: "PLENA_NOITE", label: "Plena noite" },
    { value: "PLENO_DIA", label: "Pleno dia" }
]

export const possibleDirections = [
    { value: "DECRESCENTE", label: "Decrescente" },
    { value: "CRESCENTE", label: "Crescente" }
]

export function getDayTime() {
    return daytimeMap.get(new Date().getHours())
}

export function getWeekday() {
    return weekday.get(new Date().getDay())
}
