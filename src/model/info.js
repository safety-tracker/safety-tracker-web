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

export function getDayTime() {
    return daytimeMap.get(new Date().getHours())
}

export function getWeekday() {
    return weekday.get(new Date().getDay())
}
