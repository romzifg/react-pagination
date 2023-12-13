export const generateData = (datas) => {
    let arr = [];

    datas.map((el, key) => {
        const year = (new Date() - el[2]) / 31557600000;
        const month = Math.floor(
            ((new Date() - el[2]) % 31557600000) / (1000 * 60 * 60 * 24 * 30.5)
        );
        const day = Math.floor(
            (((new Date() - el[2]) % 31557600000) % (1000 * 60 * 60 * 24 * 30.5)) /
            (1000 * 60 * 60 * 24)
        );
        arr.push({
            no: key + 1,
            id: el[0],
            name: el[1],
            birthday: `${el[2].getFullYear()}-${el[2].getMonth()}-${el[2].getDate()}`,
            age: `${Math.floor(year)} Year ${month} Month  ${day} Day`,
        });
    });

    return arr;
};