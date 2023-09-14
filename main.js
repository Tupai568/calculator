class Person {
  constructor(data) {
    this.data = data;
    this.txt = document.form.textarea;
  }

  //Fungsi Untuk Number
  Res(num) {
    const hasil = this.txt.value;
    const cek = this.txt.value + num;
    if (
      hasil.endsWith("+") ||
      hasil.endsWith("*") ||
      hasil.endsWith("-") ||
      hasil.endsWith("%") ||
      hasil.endsWith("/")
    ) {
      if (num == 0 || num == ".") {
        return;
      }
    } else if (cek == 0 || cek == ".") {
      return;
    }
    this.txt.value += num;
  }

  //Fungsi Untuk Oprator Aritmatika
  Operator(op) {
    if (this.txt.value == "") {
      return;
    }
    this.txt.value += op;
  }

  Hasil() {
    const hasil = this.rmformat(this.txt.value);
    this.data = this.txt.value = eval(hasil);
    this.txt.value = "";
  }

  Delete() {
    this.txt.value = "";
  }

  Kembali() {
    const total = document.form.textarea.value;
    document.form.textarea.value = total.substring(0, total.length - 1);
  }

  format(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  rmformat(angka) {
    return angka.replace(/\./g, "");
  }
}

const Result = new Person(0);
const has = document.querySelector(".has");
const upd = document.querySelector(".hasil span");
const setting = document.querySelector(".bxs-cog");
const menu = document.querySelector(".menu");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const df = document.querySelector(".defauld");
const ctr = document.querySelector(".container");

has.addEventListener("click", () => {
  if (Result.data != undefined) {
    upd.innerHTML = Result.format(Result.data);
  }
});

setting.addEventListener("click", () => {
  menu.classList.toggle("ubah");
});

red.addEventListener("click", () => {
  ctr.classList.add("container-red");
  ctr.classList.remove("container-green");
  menu.classList.remove("ubah");
});

green.addEventListener("click", () => {
  ctr.classList.add("container-green");
  ctr.classList.remove("container-red");
  menu.classList.remove("ubah");
});

df.addEventListener("click", () => {
  ctr.classList.remove("container-red");
  ctr.classList.remove("container-green");
  menu.classList.remove("ubah");
});
