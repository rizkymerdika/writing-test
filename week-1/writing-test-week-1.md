# Unix Command Line
Saat kita menyebut "command line" atau "command line interface", sebenarnya yang dimaksud adalah shell yang berbasis teks. Shell ini adalah program yang menerima perintah, kemudian meneruskan perintah tersebut ke system untuk dieksekusi.  Selain command line, kita juga punya shell berbasis grafis yang lebih dikenal dengan nama GUI atau graphical user interface.

GUI ini ada banyak macamnya, misalnya :
- Windows
- macOS
- Ubuntu

Shell berbasis teks atau CLI juga ada banyak macamnya, misalnya :
- sh
- bash
- zsh
- cmd.exe 

Untuk mengakses CLI, kita menggunakan sebuah program yang bernama terminal emulator.

## Filesystem
Sebuah filesystem mengatur bagaimana data disimpan di dalam sebuah system. Sistem operasi Windows & Unix-like menyusun file dan direktori menggunakan struktur yang bentuknya mirip tree.

GUI yang kita lihat sebenarnya memiliki struktur seperti pohon. Sebuah direktori bisa memiliki file dan sub-direktori, kemudian sub-direktori bisa memiliki file dan sub-direktori, dan seterusnya. Dalam sebuah filesystem direktori tree, terdapat direktori yang paling atas atau yang paling pertama disebut 'root directory'.

Yang membedakan antara windows dengan sistem operasi milik unix, biasanya sistem operasi unix hanya memiliki satu tree atau satu direktori. Sedangkan windows memiliki beberapa root directory, dimana masing-masing partisi penyimpanan seperti local disk C, D, dan E memiliki direktorinya sendiri.

## Command untuk Navigasi
- pwd (Print Working Directory): Command untuk melihat current working directory.
- ls (lists): Command untuk melihat isi file yang ada di sebuah direktori.
- cd (Change Directory): Command untuk berpindah direktori.

## Absolute & Relative Pathname
-   Absolute pathname dimulai dari root directory.
    ```
    Users/user/Work/GitHub/skilvul/tugas
    ```
-   Relative pathname dimulai dari current working directory.
    ```
    ./catatan
    (dari current working directory, kemudian ke ‘catatan’)
    ```
## Manipulasi Files & Directory
- touch: Command untuk membuat sebuah file.
- mkdir: Command untuk membuat sebuah direktori.
- head: Command untuk melihat beberapa line awal dari sebuah file text.
- tail: Command untuk melihat beberapa line awal dari sebuah file text.
- cat: Command untuk melihat isi sebuah file.
- cp: Command untuk mengcopy files atau directory.
- mv:Command untuk memindahkan files atau directory. Bisa juga digunakan untuk rename.
- rm: Command untuk menghapus file atau directory.

# Git & GitHub
Version control system adalah sebuah sistem yang merekam semua perubahan yang ada di projek dari waktu ke waktu. Version control system yang paling sering digunakan ialah git. Git dibuat oleh Linus Torvalds pada tahun 2005. Git biasanya digunakan oleh para programmer sebagai tempat penyimpanan file pemrograman mereka, karena lebih efektif. Dengan menggunakan git semua developer memiliki rekam perubahan yang lengkap dari sebuah projek. Dalam git projek ini disebut git repository.
Semua developer memiliki rekam perubahan yang sama dengan menggunakan remote repository.
Contoh layanan git remote repository:
- GitHub
- GitLab
- Bitbucket

## Tahap Bekerja dengan Git
- Working directory: Membuat file, memodifikasi file, menghapus file
- Staging: Files yang siap disimpan atau dicommit.
- Commit: Perubahan files disimpan sebagai commit.

## 3 Kondisi File pada Git
- Modified: kondisi dimana revisi atau perubahan sudah dilakukan, tetapi belum ditandai (untracked) dan belum disimpan dalam version control.
- Staged: kondisi dimana revisi sudah ditandai (modified) namun belum disimpan di version control.
- Committed: kondisi dimana revisi sudah disimpan pada version control.

## Konfigurasi Git
- ### Cek Instalasi
    ```
    git --version
    ```
- ### Setup Awal
    ```
    git config --global user.name "Rizky Merdika Agusta"
    git config --global user.email contoh@domain.com
    ```
- ### Membuat Git Repository
    ```
    git init
    ```
- ### Mengecek Perubahan yang Terjadi
    ```
    git status
    ```
- ### Menambahkan Perubahan ke Staging Area
    ```
    git add <nama_file>
    ```
- ### Menyimpan Perubahan di Staging Area
    ```
    git commit -m "message"
    ```
- ### Melihat Histori Perubahan pada Project
    ```
    git log
    ```
    ```
    git log --oneline
    ```
- ### Menampilkan Isi dari File yang Berubah
    ```
    git diff
    ``` 
- ### HEAD adalah pointer yang menunjuk ke commit yang sedang aktif. Untuk melihat commit yang sedang ditunjuk oleh HEAD bisa menggunakan:
    ```
    git show HEAD
    ```
- ### Membatalkan Perubahan - Belum Stagged dan Belum Commited
    ```
    git checkout <nama_file>
    ```
- ### Mengganti Branch atau Commit yang Sedang Aktif
    ```
    git checkout <nama branch | commit hash>
    ```
- ### Membatalkan Semua Perubahan yang Ada
    ```
    git reset <nama_file>
    ```
- ### Membatalkan Semua Perubahan yang Ada tanpa Menghapus Commit Terakhir
    ```
    git revert -n <commit hash>
    ```
- ### Membuat Branch
    ```
    git branch <nama-branch>
    ```
- ### Melihat List Branch
    ```
    git branch
    ```
- ### Menghapus Branch
    ```
    git branch -d <nama_branch>
    ```
- ### Menyatukan Branch Cabang ke Branch Master. Harus checkout dahulu ke branch master.
    ```
    git merge <nama_branch>
    ```
- ### Menghubungkan Local Repository ke Remote Repository
    ```
    git remote add <nama_repository> <url-repository>
    ```
- ### Melihat Daftar Repository
    ```
    git remote
    ```
- ### Mengirim Perubahan dari Local Repository ke Remote Repository
    ```
    git push --set-upstream origin master
    ```
- ### Mengambil Perubahan pada Remote Repository tanpa Menggabungkan Perubahan Tersebut ke Local Repository
    ```
    git fetch
    ```
- ### Mengambil Perubahan pada Remote Repository dan Menggabungkan Perubahan Tersebut ke Local Repository
    ```
    git pull
    ```
- ### Mendownload sebuah Project dari GitHub ke Komputer
    ```
    git clone <url-repository> <nama_folder>
    ```
- ### Untuk menggabungkan dua buah branch di remote repository, kita perlu melakukan Pull Request.
- ### GitHub Fork digunakan untuk menyalin sebuah repository ke akun GitHub kita.

# HTML
HTML adalah singkatan dari Hypertext Markup Language. HTML digunakan untuk menampilkan konten pada browser. Konten yang dapat ditampilkan seperti text, image, video, audio, dan masih banyak lagi. HTML bukan bahasa pemrograman karena tidak bisa mengolah data, hanya menampilkan konten saja. Fungsi HTML adalah sebagai 'kerangka', yang memberi struktur pada website.

Ada 2 tools utama yang harus dipersiapkan untuk membuat HTML:
1. Browser
2. Code Editor

Salah satu code editor yang populer banyak digunakan programmer adalah visual studio code. Visual studio code bisa diunduh pada link berikut.
```
https://code.visualstudio.com/
```
![Visual Studio Code](https://code.visualstudio.com/assets/home/home-screenshot-win.png)
Rekomendasi exntensions untuk diinstall pada vscode:
1. Live Server
2. Auto Rename Tag
3. Auto Close Tag
4. Prettier

## Struktur Dasar HTML
Struktur dasar HTML terdiri dari tiga tag utama yaitu html, head, dan body.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```
- Tag html adalah root element dari HTML.
- Tag head umumnya berisi meta, title, link, script.
- Tag body merupakan konten dari HTML.

## HTML Tag
HTML terdiri dari komponen yang disebut HTML Tag.
Pada umumnya, ada 2 tipe HTML Tag:
- Opening Tag (tag pembuka).
- Closing Tag (tag penutup).
```html
<p>Hello World !</p>
 |                |
 v                V
tag              tag
pembuka          penutup
```

## HTML Element
HTML Element merupakan sebuah komponen dalam halaman web. HTML element dimulai dari Opening Tag hingga Closing Tag. 
Biasanya HTML element terdiri dari:
- Opening tag
- Closing tag
- Atribute
- Content

Struktur dari sebuah HTML element dapat digambarkan seperti ini:
```html
<p style= "color = red">My first paragraph</p>
```
Ada dua jenis HTML Element, yaitu:
1. HTML Element yang memiliki Opening Tag (tag pembuka) dan Closing Tag (tag penutup). Contoh:
    ```html
    <h1></h1>
    ```
2. Empty HTML Element yang memiliki Self-closing Tag, yang hanya memiliki Opening Tag (tag pembuka) dengan garis miring sebelum kurung tutup. Contoh:
    ```html
    <img/>
    ```

## HTML Attribute
Di dalam Opening Tag dapat berisi attribute, fungsinya untuk memberikan informasi tambahan kepada element. Contoh penggunaan atribute:
```html
<img width="80%" src="https://bit.ly/3laVBck/>
```
- width adalah attribute untuk mengatur lebar dari element.
- src adalah attribute untuk menentukan sumber sebagai value dari element.

## HTML Comment
Kita dapat memberikan penjelasan dari code yang kita kerjakan dengan menggunakan comment. Comment tidak akan dieksekusi oleh sistem. Comment hanya untuk dibaca oleh sesama programmer.<br>
Contoh penggunaan comment:
```html
<body>
    <!-- Ini adalah header dari halaman -->
    <h1>Ini Header</h1>
</body>
```

## Menjalankan HTML
1. Secara Manual <br>
Kita bisa menjalankan HTML dengan mencari lokasi file HTML di file explorer lalu membukanya via browser.
    ![File Explorer](img-1.png)
2. Menggunakan Live Server <br>
Kekurangan menggunakan cara manual kita perlu refresh halaman jika ada perubahan content. Solusinya adalah menggunakan extensions live server pada vscode. Jika sudah diinstall kita menggunakannya dengan klik kanan pada file HTML kemudian pilih live server. Atau bisa menekan Go Live pada menu di pojok kanan bawah.
    ![File Explorer](img-2.png)

    ![Live Server](img-3.png)

## HTML Tag Populer
- img, untuk menampilkan gambar.
```html
<img src = "./skilvul/img-1.png" alt = "Profile">
```
- video, untuk menampilkan video.
```html
<video>
    <source src="video.mp4"/>
</video>
```
- table, untuk membuat tabel.
```html
<table>
    <tr>
        <th>Nama</th>
    </tr>
    <tr>
        <td>Rizky</td>
    </tr>
</table>
```
- form, untuk mengambil input dari user, konsepnya seperti formulir.
```html
<form>
    <label for = "username">Username</label>
    <input type = "text" placeholder = "Your Username">
</form>
```

## Semantic HTML
Semantic element adalah element html yang maknanya sesuai dengan kebutuhan konten. Semantic element menjelaskan tujuan dari element tersebut kepada browser serta programmer lain sehingga memudahkan programmer juga untuk membaca kode.<br>
Berikut adalah beberapa contoh dari semantic element:
```html
<nav> bagian berisi navigasi utama.
<header> bagian tajuk dari halaman web.
<section> bagian dalam sebuah halaman web.
<aside> bagian samping dari konten utama.
<footer> bagian bawah dari halaman web.
```
Kegunaan lain dari semantic HTML:
- Meningkatkan Accessibility 
- Meningkatkan SEO 
- Lebih mudah di maintain

## Code Snippet
Code snippet adalah komponen yang bisa mempercepat programming. Dengan code snippet kita bisa menulis banyak kode dan potongan tag tanpa harus ditulis satu per satu. Contoh:
```html
// Code snippet
ol>li*3
// Hasilnya seperti ini
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>
```

## Deploy HTML
Deploy adalah proses mempublikasi aplikasi yang kita kerjakan. Lalu bagaimana mendeploy HTML kita? <br>
Solusinya dengan menggunakan tools bernama netlify.

![Netlify](img-4.png)
Langkah-langkah mendeploy HTML ke Netlify :

1. Masuk ke netlify.com kemudian lakukan registrasi menggunakan email atau akun GitHub. Direkomendasikan menggunakan akun GitHub.
2. Setelah login masuk ke tab Sites lalu drag and drop seluruh folder html kalian.
3. Kalian juga bisa import projek HTML kalian melalui Git repository.
4. Projek HTML sudah ter-deploy. Kalian juga akan mendapatkan domain url dari projek kalian sehingga bisa diakses melalui internet.