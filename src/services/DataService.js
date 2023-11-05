const datas = [
  {
    _id: "1",
    nama: "Asep",
    alamat:"Nagrek",
    pw: "Pria",
    lahir: "3 Mei 1990",
    input: "26 Jan 2023 11:04",
  },
  {
    _id: "2",
    nama: "Septian",
    alamat:"Bandung",
    pw: "Pria",
    lahir: "28 Sept 1990",
    input: "26 Jan 2023 12:22",
  }
];

export function getDatas() {
  return datas;
}

export function getData(id) {
  return datas.find(d => d._id === id);
}

export function saveData(data) {
  let dataInDb = datas.find(d => d._id === data._id) || {};
  dataInDb.nama = data.nama;
  dataInDb.alamat = data.alamat;
  dataInDb.pw = data.pw;
  dataInDb.lahir = data.lahir;

  if (!dataInDb._id) {
    dataInDb._id = Date.now();
    datas.push(dataInDb);
  }

  return dataInDb;
}

export function deleteData(id) {
  let dataInDb = datas.find(d => d._id === id);
  datas.splice(datas.indexOf(dataInDb), 1);
  return dataInDb;
}
