---
# try also 'default' to start simple
theme: penguin
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: prism
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
layout: intro
---


# Introduction to Frontend Development

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/zuramai/talks" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: presenter
presenterImage: https://saugi.me/images/ogi.png
class: grid  align-self-center justify-self-center
---

# Ahmad Saugi
Open-source Frontend Developer
- Currently studying at <fancy-link href="https://binus.ac.id/">Binus University</fancy-link>
- Portfolio <fancy-link href="https://saugi.me">saugi.me</fancy-link>
- Say hi at <fancy-link href="https://instagram.com/asawgi">@asawgi</fancy-link>

<!--
141
-->

---

# Rangkaian workshop hari ini:
- Instalasi software prasyarat 
- Berkenalan dengan dunia frontend development
- Roadmap menjadi frontend developer yang baik dan benar
- Belajar HTML dan CSS
- Membuat website sederhana menggunakan HTML dan CSS
- QnA

---
class: "text-center flex items-center"
---
# Apa aja sih yang perlu dipersiapkan?

<style>
.big-logos svg {
width: 100px;
height: 100px;
}
</style>
<div grid="~ cols-2 gap-x-10 gap-y-10" class="text-center">
  <div class="big-logos"><akar-icons-vscode-fill class="inline-block"/></div>
  <div>
    <div class="flex justify-center gap-3 big-logos">
      <logos-firefox/><logos-chrome/><logos-brave/><logos-microsoft-edge/>
    </div>
  </div>
  <div>Visual Studio Code</div>
  <div>Browser favorit kamu (Firefox/Chrome/Dll)</div>
</div>

---
layout: text-image
media: /images/ui.webp
class: "flex items-center"
---

# Kenalan dengan Frontend Development
*Front-end web development* adalah pengembangan situs web yang akan disajikan langsung kepada pengguna melalui penggunaan HTML, CSS, dan JavaScript, sehingga pengguna dapat melihat dan berinteraksi dengan situs web tersebut.

---

# Roadmap 
https://roadmap.sh
<Roadmap/>

---
layout: center
---
# Jadi, apakah semuanya perlu dipelajari?

<v-click class='text-center'>

<p class="text-center">Tentu tidak</p>

</v-click>
---


# Spesialisasi di Front-end development

<div v-click>

| Game dev | UI Design | Creative | Software Engineer | System Engineer | 
| --- | --- | --- | --- | --- |
| <ul><li>ThreeJS</li><li>PixiJS</li><li>BabylonJS</li></ul> | <ul><li>SASS</li><li>Bootstrap</li><li>TailwindCSS</li><li>PostCSS</li></ul> | <ul><li>HTML5 Canvas</li><li>WebGL</li><li>SVG</li><li>GSAP</li></ul> | <ul><li>Vue</li><li>React</li><li>Angular</li></ul> | WebAssembly

</div>
---
layout: iframe

# the web page source
url: https://bruno-simon.com/
---


---
layout: new-section
class: "flex items-center justify-center" 
---
<ri-html5-fill class="mx-auto text-6xl"/>

# HTML5

---
layout: image-left
class: "flex  flex-col justify-center"
image: >-
  https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/html-examples.jpeg
---

# Apa itu HTML?
HTML adalah singkatan dari **HyperText Markup Language**.

<v-click>

HTML adalah bahasa yang digunakan untuk menyusun dokumen yang akan dirender di browser.

</v-click>

<v-click>

Ya, HTML adalah bahasa markup, bukan bahasa pemrograman.

</v-click>

<!--
Seperti yang bisa kalian lihat di gambar disamping, itu adalah contoh kode HTML.

HTML adalah bahasa markup, yaitu bahasa yang digunakan untuk menstruktur sebuah dokumen.
-->

---

# Basic HTML

HTML terdiri dari kumpulan **_tag_** yang terdiri dari _tag_ pembuka dan penutup.

```html {all|1|2,9|3,5|4|6-8}
<!DOCTYPE html>
<html>
<head>
    <title>Judul yang akan ditampilkan di tab browser</title>
</head>
<body>
    <p>Teks kamu akan muncul disini</p>
</body>
</html>
```

<p v-click="1">

`<!DOCTYPE html>` ditulis agar browser mengetahui bahwa yang akan file yang dibuka itu akan dirender sebagai HTML.

</p>

<p v-click="2">

`<html>` membungkus semua elemen HTML kecuali `<!DOCTYPE html>`

</p>

<p v-click="3">

`<head>` berisikan data-data yang menjelaskan tentang file HTML ini

</p>

<!-- <p v-click="4">

`<title>` berisi teks yang akan dijadikan judul sebuah halaman

</p> -->

<p v-click="5">

`<body>` berisi segala hal yang akan ditampilkan sebagai konten website.

</p>

<hr class="mt-5"/>

<v-click>

Tag HTML itu terdiri dari pembuka dan penutup.

`<p> Hello World </p>`

<ic-round-arrow-right-alt style="color:red; rotate: 270deg; margin: -30px 0;display:inline-block" height="100" width="40"/>
<ic-round-arrow-right-alt style="color:red; rotate: 270deg; margin: -30px 120px; display:inline-block" height="100" width="40"/>
<br/>

Ini tag pembuka &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ini tag penutup

</v-click>

---

# HTML Tags

HTML terdiri dari bermacam-macam **_tag_**. 

<div grid="~ cols-2">

| Tag | Sebagai |
| --- | ------- |
| `<p>` | Paragraf |
| `<h1>` | Heading 1 |
| `<h2>` | Heading 2 |
| `<h3>` | Heading 3 |
| `<h4>` | Heading 4 |
| `<h5>` | Heading 5 |
| `<h6>` | Heading 6 |
| `<strong>` | Bold |

| Tag | Sebagai |
| --- | ------- |
| `<ul>` | List |
| `<ol>` | List |
| `<li>` | List |
| `<img>` | Menampilkan gambar |
| `<a>` | Link |
| `<div>` | Pembagian |
| `<button>` | Membuat tombol |

</div>

---

# Form

`<form>` adalah sebuah tag untuk membungkus tag-tag yang berisikan user input, yaitu:


<table>

<tr>

<td>

```html
<input type="text">
```
</td>
<td><input type="text" class="border border-gray-500"></td>
</tr>
<tr>
<td>

```html
<input type="password">
```
</td>
<td><input type="password" class="border border-gray-500"></td>
</tr>
<tr>
<td>

```html
<input type="checkbox">
```

</td> 
<td>

<input type="checkbox" class="border border-gray-500 mr-2">
<input type="checkbox" class="border border-gray-500">

</td>

</tr>
<tr>

<td>

```html
<textarea></textarea>
```

</td> <td> <textarea class="border border-gray-500"></textarea> </td>

</tr>
<tr>

<td> 

```html
<select>
  <option>Pilih salah satu</option>
  <option>Indonesia</option>
</select>
```

</td>
<td> 
<select>
  <option>Pilih salah satu</option>
  <option>Indonesia</option>
</select>
</td>

</tr>
</table>

---

# Membuat Struktur HTML yang Rapi

<div grid="~ cols-2 flow-row-dense" class="gap-5">

<div v-click="1">

Manusia ketika dianggap sebagai folder:

</div>


<div v-click="2">

Manusia ketika dibuat sebagai folder (tapi lebih rapi):

</div>

<div v-click="1">

```txt
👨‍🦱 manusia
├── mata
├── rambut
├── perut
├── pundak
├── jari
└── mata-kaki
```

</div>

<div v-click="2">

```txt
👨‍🦱 manusia
├── 📁 kepala
│   ├── mata
│   └── rambut
├── 📁 badan
│   ├── perut
│   └── pundak
└── 📁 kaki
    ├── jari
    └── mata-kaki
```

</div>
</div>

---

# Membuat Struktur HTML yang Rapi

<div grid="~ cols-2 flow-row-dense" class="gap-5">

<div v-click="1">
Contoh HTML yang tidak rapi:
</div>

<div v-click="2">
Contoh HTML yang rapi:
</div>
<div v-click="1">

```html
<body>

<h1>Selamat datang</h1>
<p>Silakan isi form dibawah idni untuk mendaftar</p>
<form>
<p>Nama anda:</p>
<input type="text">
<p>Pesan:</p>
<textarea></textarea>
</form>
</main>

</body>
```

</div>

<div v-click="2">

```html
<body>
  <header>
    <h1>Selamat datang</h1>
  </header>
  <main>
    <p>Silakan isi form dibawah ini untuk mendaftar</p>
    <form method="POST">
      <div class="form-input">
        <p>Nama anda:</p>
        <input type="text">
      </div>
      <div class="form-input">
        <p>Pesan:</p>
        <textarea></textarea>
      </div>
      <button> Submit </button>
    </form>
  </main>
</body>
```

</div>

</div>

---

# CSS

CSS adalah singkatan dari Cascading Style Sheet

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# CSS

Ada 3 cara untuk menuliskan CSS. Antara lain:

- Inline CSS
- Internal CSS
- External CSS

---

<div grid="~ cols-2">

<h1>Inline CSS</h1>
<h1 v-click="1">Internal CSS</h1>

<div class="pr-5">

  Inline CSS adalah code css yang ditulis secara langsung pada elemen HTML. 

  Contoh:

  ```html
  <p style="color: red">Text warna merah</p>
  ```
</div>

<div v-click="1">

  Internal CSS adalah code css yang ditulis dengan menggunakan tag `<style>`, dan di dalam tag <br/>` <head>`.

  Contoh:

  ```html
  <head>
  <style>
    p {
      color: red;
    }
  </style>
  </head>
  <body>
    <p>Text warna merah</p>
  </body>
  ```
</div>

</div>

---


<h1>External CSS</h1>

External CSS adalah code css yang ditulis pada sebuah file berekstensi .css.

Contoh:

<div class="grid grid-cols-[1fr,1fr]">

<div class="pr-5">


File `index.html`
```html {all|4}
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </body>
</html>
```

<arrow v-click="1" x1="420" y1="450" x2="350" y2="350" color="red" width="3" arrowSize="1" />


</div>

<div>

File `style.css`
```css
h1 {
  font-size: 16px;
}

p {
  color: red;
}

```
</div>

</div>
---

# CSS Selector

CSS Selector berguna untuk memilih elemen yang akan kamu berikan style.

```css
p { color: blue }
```

<arrow x1="75" x2="75" y1="350" y2="250" color="#ccc" width="3" arrowSize="2"/>
<arrow x1="250" x2="250" y1="350" y2="250" color="#ccc" width="3" arrowSize="2"/>
<arrow x1="450" x2="450" y1="350" y2="250" color="#ccc" width="3" arrowSize="2"/>

<p class="absolute top-[350px] left-[40px]"> SELECTOR </p>
<p class="absolute top-[350px] left-[210px]"> PROPERTY </p>
<p class="absolute top-[350px] left-[425px]"> VALUE </p>

<style>

code, kbd, samp, pre {
  font-size: 3rem
}
.slidev-code {
  padding: 2rem 3rem 1rem !important
}

</style>

---

# ID dan Class

Id dan class adalah sebuah attribute yang dapat menjadi selector CSS.

<div class="grid grid-cols-[1fr,1fr]">

<div class="pr-5">


File `index.html`
```html {8|10-13}
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <p id="besar">Tulisan ini besar</p>

    <p class="tulisan-merah">Satu</p>
    <p class="tulisan-merah">Dua</p>
    <p class="tulisan-merah">Tiga</p>
    <p class="tulisan-merah">Empat</p>
  </body>
</html>
```


</div>

<div>

File `style.css`
```css {1-3|5-7}
#besar {
  font-size: 16px;
}

p {
  color: red;
}

```
</div>

</div>

---

<center>

# Property yang paling umum digunakan

</center>


| Tag | Sebagai | Contoh Penggunaan | 
| --- | ------- | ----------------- |
| `color` | Warna teks | `color: blue` |
| `background-color` | Warna elemen | `background-color: #FFF` |
| `width` | Lebar elemen | `width: 100px` |
| `height` | Tinggi elemen | `height: 100px` |
| `margin` | Jarak antar elemen | `margin: 10px` |
| `padding` | Jarak elemen dengan konten | `padding: 15px` |
| `font-size` | Ukuran teks | `font-size: 16px` |
| `font-family` | Jenis font | `font-family: Verdana` |

---

<center>

# Property yang paling umum digunakan

</center>


| Tag | Sebagai | Contoh Penggunaan | 
| --- | ------- | ----------------- |
| `border` | Garis border | `border: 1px solid black` |
| `border-radius` | Lengkungan sudut elemen | `border-radius: 5px` |
| `position` | Mengatur tipe posisi elemen | `position: fixed` |
| `display` | Mengatur tampilnya suatu elemen | `width: 100px` |
| `text-align` | Mengatur perataan sebuah paragraf | `width: 100px` |


---
layout: text-image
media: images/dribbble.png
---
# Sebuah Tips: Inspirasi Design

Kalian bisa mendapatkan inspirasi-inspirasi web design di internet, beberapa diantaranya yang paling populer adalah:

- https://behance.net
- https://dribbble.com
- https://pinterest.com

<p v-click>Lakukanlah ATM (Amati-Tiru-Modifikasi) </p>

---
layout: text-image
media: images/colorhuntpanjang.png
---
# Sebuah Tips: Pemilihan Warna

Kalian bisa mendapatkan *color pallete* dan kombinasi warna yang bagus yang bisa digunakan di website kalian. 

- https://colorhunt.co/
- https://flatuicolors.com/
- https://coolors.co/

<p v-click>Lakukanlah ATM (Amati-Tiru-Modifikasi) </p>

---
layout: text-image
media: images/w3schools.png
---
# Tahap selanjutnya

Berikut website yang bisa digunakan untuk belajar lebih lanjut:

- https://www.w3schools.com/html/
- https://www.w3schools.com/css/
- https://www.w3schools.com/js/


---
layout: intro
---

# QnA