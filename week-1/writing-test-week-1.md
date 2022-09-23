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